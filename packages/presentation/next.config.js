const withTM = require('next-transpile-modules')([
  '@flashcards/core',
  '@flashcards/service',
  '@flashcards/usecase',
])

module.exports = withTM({
  reactStrictMode: true,
  distDir: '../../dist',
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:4000/graphql',
      },
    ]
  },
})
