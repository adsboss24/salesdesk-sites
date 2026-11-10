import { JWT } from "google-auth-library";

const INDEXING_API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const METADATA_API_URL = "https://indexing.googleapis.com/v3/urlNotifications/metadata";

interface IndexingResponse {
  urlNotificationMetadata?: {
    url: string;
    latestUpdate?: {
      url: string;
      type: string;
      notifyTime: string;
    };
  };
  error?: {
    code: number;
    message: string;
    status: string;
  };
}

function getGoogleAuthClient(): JWT | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    try {
      const parsed = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
      return new JWT({
        email: parsed.client_email,
        key: parsed.private_key,
        scopes: ["https://www.googleapis.com/auth/indexing"],
      });
    } catch (e) {
      console.error("Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON:", e);
    }
  }

  if (!email || !privateKey) {
    console.warn("Google Indexing credentials missing (GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY).");
    return null;
  }

  privateKey = privateKey.replace(/\\n/g, "\n");

  return new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
}

/**
 * Submits a single URL to Google for immediate indexing or deletion.
 */
export async function requestGoogleIndexing(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<{ success: boolean; data?: IndexingResponse; error?: string }> {
  try {
    const authClient = getGoogleAuthClient();
    if (!authClient) {
      return {
        success: false,
        error: "Google credentials not configured in environment variables.",
      };
    }

    const tokenResponse = await authClient.getAccessToken();
    const accessToken = tokenResponse.token;

    if (!accessToken) {
      return { success: false, error: "Failed to retrieve Google OAuth2 access token." };
    }

    const response = await fetch(INDEXING_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url,
        type,
      }),
    });

    const data: IndexingResponse = await response.json();

    if (!response.ok || data.error) {
      return {
        success: false,
        error: data.error?.message || `HTTP ${response.status}: Failed to submit URL`,
        data,
      };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown indexing error",
    };
  }
}

/**
 * Submits multiple URLs in sequence with rate-limiting protection.
 */
export async function batchRequestGoogleIndexing(urls: string[]) {
  const results = [];
  for (const url of urls) {
    const res = await requestGoogleIndexing(url, "URL_UPDATED");
    results.push({ url, ...res });
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  return results;
}

/**
 * Checks the last indexing notification status for a specific URL.
 */
export async function getGoogleIndexingStatus(url: string) {
  try {
    const authClient = getGoogleAuthClient();
    if (!authClient) return null;

    const tokenResponse = await authClient.getAccessToken();
    const accessToken = tokenResponse.token;

    const res = await fetch(`${METADATA_API_URL}?url=${encodeURIComponent(url)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
