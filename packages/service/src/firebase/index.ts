import firebase from 'firebase/app'
import 'firebase/auth'
import { UserData, LoginProvidersData } from '@flashcards/usecase'
import { AuthService } from '../AuthService'

class FirebaseService implements AuthService {
  private readonly firebase: firebase.app.App

  constructor(options: unknown) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(options)
    }
  }

  getUserToken(): Promise<string> {
    const firebaseUser = firebase.auth().currentUser

    if (!firebaseUser) {
      return Promise.resolve(null)
    }

    return firebaseUser.getIdToken(true)
  }

  async getCurrentUser(): Promise<UserData> {
    const firebaseUser = firebase.auth().currentUser

    if (!firebaseUser) {
      return null
    }

    return {
      email: firebaseUser.email ?? '',
      emailVerified: firebaseUser.emailVerified ?? false,
      name: firebaseUser.displayName ?? '',
      photoUrl: firebaseUser.photoURL ?? '',
      uid: firebaseUser.uid,
    }
  }

  userObserver(callback: (user: UserData) => void): void {
    firebase.auth().onAuthStateChanged(async firebaseUser => {
      if (!firebaseUser) {
        return callback(null)
      }

      callback({
        email: firebaseUser.email ?? '',
        emailVerified: firebaseUser.emailVerified ?? false,
        name: firebaseUser.displayName ?? '',
        photoUrl: firebaseUser.photoURL ?? '',
        uid: firebaseUser.uid,
      })
    })
  }

  private getFirebaseProvider(provider: LoginProvidersData): firebase.auth.AuthProvider {
    switch (provider) {
      case LoginProvidersData.Google:
        return new firebase.auth.GoogleAuthProvider()
      case LoginProvidersData.Facebook:
        return new firebase.auth.FacebookAuthProvider()
    }
  }

  async loginWithProvider(provider: LoginProvidersData): Promise<UserData> {
    const firebaseProvider = this.getFirebaseProvider(provider)
    const { user } = await firebase.auth().signInWithPopup(firebaseProvider)
    const token = await user?.getIdToken(true)

    if (user === null) {
      return null
    }

    return new UserData({
      name: user.displayName ?? '',
      email: user.email ?? '',
      emailVerified: user.emailVerified ?? false,
      photoUrl: user.photoURL ?? '',
      uid: user.uid,
      token,
    })
  }
}

export { FirebaseService }
