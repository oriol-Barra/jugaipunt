module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
<<<<<<< HEAD
  rules: {}
=======
  rules: {
    'no-console': 'off'
  }
>>>>>>> 617f78435f24004d42f23754e0c7f5dbdb9d2289
}
