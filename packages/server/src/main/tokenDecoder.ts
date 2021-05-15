import admin from 'firebase-admin'
import serviceAccount from './service-account'

function tokenDecoder(token: string) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id,
      }),
    })
  }

  return admin.auth().verifyIdToken(token)
}

export { tokenDecoder }
