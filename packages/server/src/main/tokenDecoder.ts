import admin from 'firebase-admin'
import serviceAccount from './service-account'

function tokenDecoder(token: string) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: serviceAccount.clientEmail,
        privateKey: serviceAccount.privateKey,
        projectId: serviceAccount.projectId,
      }),
    })
  }

  return admin.auth().verifyIdToken(token)
}

export { tokenDecoder }
