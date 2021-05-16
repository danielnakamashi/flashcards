import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../../../.env.local') })
const serviceAccount = Object.freeze({
  type: 'service_account',
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKeyId: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  clientId: process.env.FIREBASE_ADMIN_CLIENT_ID,
  authUri: process.env.FIREBASE_ADMIN_AUTH_URI,
  tokenUri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  authProviderX509CertUrl: process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
})

export default serviceAccount
