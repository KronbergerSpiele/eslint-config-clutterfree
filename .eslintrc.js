module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'standard',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    camelcase: ['off'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: ['error', 'never'],
    curly: ['error', 'multi'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-sequences': 'off',
    'no-undef': 'off',
    'react/forbid-prop-types': 2,
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
