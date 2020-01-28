module.exports = {
    extends: ['google', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        es6: true
    },
    rules: {
        '@typescript-eslint/indent': ['error', 2],
        'require-jsdoc': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-function': 0,
        'max-len': 0
    }
}