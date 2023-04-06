module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
    },
    ignorePatterns: ['package.json', 'packages/client/package.json', 'packages/extension/package.json', '**/*.d.ts'],
};
