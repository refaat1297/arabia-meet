import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: runtimeConfig.FIREBASE_API_KEY,
    authDomain: runtimeConfig.FIREBASE_AUTH_DOMAIN,
    projectId: runtimeConfig.FIREBASE_PROJECT_ID,
    storageBucket: runtimeConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: runtimeConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: runtimeConfig.FIREBASE_APP_ID,
    measurementId: runtimeConfig.FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  return {
    provide: {
      app,
      auth
    }
  }


})
