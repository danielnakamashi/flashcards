const firebaseConfig = {
  apiKey: process.env.firebaseApiKey as string,
  authDomain: `${process.env.firebaseProjectId ?? ''}.firebaseapp.com`,
  databaseURL: `https://${process.env.firebaseProjectId ?? ''}.firebaseio.com`,
  projectId: process.env.firebaseProjectId as string,
  storageBucket: `${process.env.firebaseProjectId ?? ''}.appspot.com`,
  messagingSenderId: process.env.firebaseProjectId as string,
  appId: process.env.firebaseAppId as string,
}

export default firebaseConfig
