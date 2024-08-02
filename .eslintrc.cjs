const RULE = {
   OFF: "off",
   WARN: "warn",
   ERROR: "error",
}

module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "standard",
      "prettier",
   ],
   ignorePatterns: ["dist", ".eslintrc.cjs"],
   parser: "@typescript-eslint/parser",
   plugins: ["react-refresh"],
   rules: {
      "react-refresh/only-export-components": [
         RULE.WARN,
         { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": RULE.OFF,
   },
}
