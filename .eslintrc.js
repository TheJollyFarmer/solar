module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": 0,
    "no-unused-vars": "off",
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "selfClosingTag": "never"
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "multiline": "never"
      }
    ]
  }
};
