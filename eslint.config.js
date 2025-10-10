import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "dev-dist",
      "/api/generated/**",
      "src/labels/cameroon-data.ts",
      "src/labels/cameroon-data20-1.ts",
      "src/labels/cameroon-data21-1.ts",
      "src/labels/cameroon-data22-1.ts",
      "src/labels/cameroon-data23-1.ts",
      "src/labels/cameroon-data24-1.ts",
      "src/labels/cameroon-data25-1.ts",
      "src/labels/cameroon-data26-1.ts",
      "src/labels/cameroon-data27-1.ts",
      "src/labels/cameroon-data28-1.ts",
      "src/labels/cameroon-data29-1.ts",
      "src/labels/cameroon-data30-1.ts",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
