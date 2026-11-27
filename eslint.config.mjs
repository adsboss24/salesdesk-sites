import nextConfig from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [
      ".vercel/**",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "scripts/**",
    ],
  },
  ...nextConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;

