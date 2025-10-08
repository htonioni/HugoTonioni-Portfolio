import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React 19 com Next.js 15 não precisa de import React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      
      // Permitir variáveis não utilizadas que começam com _
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      
      // Permitir any em alguns casos específicos
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Outras regras do Next.js
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);
