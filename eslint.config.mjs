import nextPlugin from "@next/eslint-plugin-next"
import tseslint from "typescript-eslint"
import globals from "globals"

export default [
  // Ignore build output
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  // TypeScript + Next.js rules (without the broken react/display-name)
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Relax some strict TS rules for this codebase
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
]
