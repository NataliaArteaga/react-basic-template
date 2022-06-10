module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
