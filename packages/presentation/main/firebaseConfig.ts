const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? ''}.firebaseapp.com`,
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? ''}.firebaseio.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? ''}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string,
}

export default firebaseConfig
