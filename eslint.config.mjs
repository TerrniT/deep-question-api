// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      'max-lines': [
		  'error', {
          max: 10000,
          skipComments: false,
          skipBlankLines: false
		  }
      ],
      semi: [2, 'never'],
      'space-before-function-paren': ['error', {
		  anonymous: 'never',
		  named: 'never',
		  asyncArrow: 'always'
      }],
      'lines-between-class-members': [
		  'error',
		  'always',
		  { exceptAfterSingleLine: true }
      ],
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': ['error', {
		  argsIgnorePattern: '^_'
      }],
      'max-len': ['error', {
		  code: 100,
		  ignoreUrls: true,
		  tabWidth: 2,
		  ignoreTrailingComments: true,
		  ignoreComments: true,
		  ignoreStrings: true,
		  ignoreTemplateLiterals: true
      }],
      'no-trailing-spaces': ['error', {
		  skipBlankLines: false
      }],
      'no-multiple-empty-lines': ['error', {
		  max: 1
      }],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': ['error', {
		  ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true
		  },
		  ImportDeclaration: 'never',
		  ExportDeclaration: 'never'
      }],
      'object-property-newline': ['error', {
		  allowMultiplePropertiesPerLine: true
      }],
      'space-before-blocks': 'error',
      'no-spaced-func': 'error',
      'implicit-arrow-linebreak': 'error',
      'quote-props': ['error', 'as-needed'],
      'computed-property-spacing': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'brace-style': 'error',
      'key-spacing': ['error', {
		  beforeColon: false
      }],
      'no-console': 'warn',
      'no-empty': ['error', {
		  allowEmptyCatch: true
      }],
      'prefer-object-spread': 'error',
      'space-in-parens': ['error', 'never'],
      'arrow-spacing': ['error', {
		  before: true,
		  after: true
      }],
      'dot-notation': 'error',
      indent: ['error', 2],
      'space-unary-ops': 'error',
      'padded-blocks': ['error', 'never'],
      quotes: ['error', 'single'],
      'prefer-rest-params': 'off',
      'comma-dangle': ['error', 'never'],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }]
	  }
  }

)