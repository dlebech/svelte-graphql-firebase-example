import { writable } from "svelte/store";
import { initializeApp } from "firebase/app";
import type { User } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const user = writable<User | null>(null);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Subscribe to change in user
const auth = getAuth();

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    user.set(firebaseUser);
  } else {
    user.set(null);
  }
});