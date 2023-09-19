module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  /*  settings: {
    react: {
      version: '999.999.999',
    },
  }, */
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['jest', 'react', '@typescript-eslint', 'import', 'prettier'],
  root: true,
  rules: {
   
    'react/no-unescaped-entities': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 0,
    'no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['warn', 'never'],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'linebreak-style': ['error', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
  },
};
