require('dotenv').config({ path: '../../.env.local' })
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
        destination: 'http://api:4000/graphql',
      },
    ]
  },
  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseSenderId: process.env.FIREBASE_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
  },
})
