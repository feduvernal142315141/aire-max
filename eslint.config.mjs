// @ts-check
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import jsxA11y from "eslint-plugin-jsx-a11y"
import nextPlugin from "@next/eslint-plugin-next"
import globals from "globals"

// NOTE: `eslint-plugin-tailwindcss` (v3.x) is intentionally NOT used.
// It is incompatible with Tailwind v4 (no JS config file — uses CSS @theme)
// and with ESLint v10 (uses the removed `context.getSourceCode()` API).
// Class ordering is delegated to `prettier-plugin-tailwindcss` (the official
// Tailwind Labs plugin), which runs on every save / pre-commit via lint-staged.

/**
 * Flat config for aire-max (Next.js 16 + React 19 + TS strict + Tailwind 4).
 *
 * Intentionally conservative: the project already has stricter TS in place,
 * so ESLint focuses on catching real bugs, enforcing hooks rules, minimum a11y,
 * and Next.js core-web-vitals — without blocking the build on existing code.
 */
export default tseslint.config(
  // --- Ignored paths -------------------------------------------------------
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "next-env.d.ts",
      "tsconfig.tsbuildinfo",
      "pnpm-lock.yaml",
      "**/*.config.*",
      ".husky/**",
    ],
  },

  // --- Base JS + TS --------------------------------------------------------
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // --- Source files: language options, plugins, and project rules ----------
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // Enable type-aware linting (required by @typescript-eslint/no-unsafe-*).
        // `projectService` auto-discovers the nearest tsconfig for each file.
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },
    rules: {
      // React hooks (rules of hooks + exhaustive deps)
      ...reactHooks.configs.recommended.rules,

      // Minimum a11y (recommended ruleset, project-friendly)
      ...jsxA11y.configs.recommended.rules,

      // Next.js core-web-vitals
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // --- Project-specific overrides ------------------------------------

      // Allow console.warn / console.error (useful for boundaries and logging).
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Allow leading underscore to mark intentionally unused values.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Force `import type { X }` for type-only imports — cleaner bundles.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],

      // `any` is allowed in the project only for narrow adapter layers;
      // keep the unsafe rules on as warnings so we see drift without blocking.
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",

      // Keep `no-explicit-any` off — project uses it intentionally in narrow spots.
      "@typescript-eslint/no-explicit-any": "off",

      // `require()` in TS files stays off; scripts can still use CJS if needed.
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // --- shadcn UI primitives ------------------------------------------------
  // `components/ui/**` sigue convenciones de shadcn (variants con `any` por
  // compat con Radix, div-as-group con click-to-focus UX, cva internals).
  // Relajamos reglas específicas SOLO acá — el resto del código las respeta.
  {
    files: ["components/ui/**/*.{ts,tsx}"],
    rules: {
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
)
