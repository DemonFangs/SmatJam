module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "block-scoped-var": "error",
    "block-spacing": ["error", "always"],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "callback-return": "error",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "off",
    "comma-style": ["error", "last"],
    complexity: "error",
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "consistent-this": "error",
    curly: "off",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    "eol-last": "off",
    eqeqeq: "off",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": ["error", "expression"],
    "function-paren-newline": "off",
    "generator-star-spacing": "error",
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": ["error", { min: 2 }],
    "id-match": "error",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "indent-legacy": "off",
    "init-declarations": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-around-directive": "error",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-len": ["error", 120],
    "max-lines": "error",
    "max-lines-per-function": ["error", 100],
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": ["error", "separate-lines"],
    "multiline-ternary": "off",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "off",
    "no-extend-native": "off",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    "no-mixed-operators": [
      "error",
      {
        allowSamePrecedence: true,
      },
    ],
    "no-mixed-requires": "off",
    "no-mixed-spaces-and-tables": "smart-tabs",
    "no-multi-assign": "error",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "off",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "off",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": ["error", "any"],
    "object-curly-newline": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": "error",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": ["error", "as-needed"],
    quotes: "off",
    radix: ["error", "as-needed"],
    "require-atomic-updates": "error",
    "require-await": "off",
    "require-jsdoc": "error",
    "require-unicode-regexp": "off",
    "rest-spread-spacing": ["error", "never"],
    semi: "off",
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "sort-imports": "error",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "off",
    "space-unary-ops": [
      "error",
      {
        nonwords: false,
        words: false,
      },
    ],
    "spaced-comment": ["error", "always"],
    strict: "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "valid-jsdoc": "error",
    "vars-on-top": "off",
    "wrap-iife": ["error"],
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    yoda: ["error", "never"],
  },
};