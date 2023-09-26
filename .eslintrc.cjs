/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/order": ["warn", { "newlines-between": "always" }],
  },
};
