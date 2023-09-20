module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["build", "dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "@typescript-eslint",
    "import",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/triple-slash-reference": "off",

    /* other */
    "no-void": "off",
    camelcase: "off",
    "no-shadow": "off",
    "no-console": "warn",
    "comma-dangle": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "operator-linebreak": "off",
    "no-use-before-define": "off",
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": "off",
    "linebreak-style": ["off", "windows"],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 110,
      },
    ],

    /* react */
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "react/jsx-curly-newline": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-wrap-multilines": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": "off",
    "react/void-dom-elements-no-children": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"],
      },
    ],
    /* typescript */
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "warn",
    /* import */
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["off"],
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "max-len": "off",
      },
    },
  ],
};
