module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'css',
        tabWidth: 4,
        singleQuote: false,
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
        tabWidth: 4,
        singleQuote: false,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 4,
        singleQuote: false,
      },
    },
  ],
};
