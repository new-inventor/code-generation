const config = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        enums: 'always-multiline',
        generics: 'never',
        tuples: 'always-multiline',
      },
    ],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-extraneous-dependencies': 'off',
    'mport/extensions': 'off',
    'padded-blocks': [2, 'never'],
    'no-plusplus': 0,
    indent: 0,
    'object-property-newline': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'brace-style': [2, '1tbs'],
    'key-spacing': [
      2,
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'implicit-arrow-linebreak': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        json: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'max-len': [
      2,
      {
        code: 220,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 0,
    'no-debugger': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-bitwise': [2, { allow: ['>>=', '&'] }],
    'sort-keys': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'object-curly-newline': 0,
    'lines-between-class-members': 'off',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

module.exports = config;
