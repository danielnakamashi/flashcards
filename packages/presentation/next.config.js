const withTM = require('next-transpile-modules')([
  '@flashcards/core',
  '@flashcards/service',
  '@flashcards/usecase',
])

module.exports = withTM({
  reactStrictMode: true,
})
