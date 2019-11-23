module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:import/errors',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['react', 'import', 'prettier', 'standard', 'react-hooks'],
  settings: {
    react: { version: '16.12.0' },
  },
  rules: {
    'import/default': 2,
    'import/no-named-default': 'off',
    camelcase: 'off',
    'max-len': [
      'off',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': 'error',
    'standard/no-callback-literal': 'off',
    'no-unexpected-multiline': 'off',
    'no-return-await': 'off',
    'new-cap': 'off',
    'lines-between-class-members': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  env: {
    browser: true,
  },
  globals: {
    fetch: false,
  },
}