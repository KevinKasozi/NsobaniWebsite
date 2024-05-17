module.exports = {

  root: true,

  env: {
    browser: true, 
    es2020: true
  },

  plugins: ['security', 'react-refresh'], // Plugins consolidated

  extends: [
    'eslint:recommended',
    'plugin:security/recommended', 
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  settings: {
    react: {
      version: '18.2' 
    }
  }, 

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }

}
