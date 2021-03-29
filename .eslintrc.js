module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:react/recommended`,
  ],
  plugins: [`@typescript-eslint`, `import`],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: `off`,
    '@typescript-eslint/quotes': [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: `always` }],
    indent: [`error`, 2, { SwitchCase: 1 }],
    'import/order': [
      2,
      {
        groups: [
          `builtin`,
          `external`,
          `internal`,
          [`parent`, `sibling`, `index`],
        ],
      },
    ],
    'import/newline-after-import': 1,
    'import/no-duplicates': 2,
    'import/no-cycle': 2,
    semi: [1, `always`],
  },
};
