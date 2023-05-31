module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 'off',
        'vue/html-indent': 'off',
        'vue/first-attribute-linebreak': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-self-closing':'off',
        'indent': ['error', 4],
        'quotes':['error','single']
    },
    ignorePatterns: ['package.json', '**/*.d.ts'],
};
