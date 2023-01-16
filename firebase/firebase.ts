
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCChNZCrdPQ4GlY5Q58cDzQMPazUVYkIw8",
  authDomain: "ft-suite-1a9da.firebaseapp.com",
  projectId: "ft-suite-1a9da",
  storageBucket: "ft-suite-1a9da.appspot.com",
  messagingSenderId: "1008558218492",
  appId: "1:1008558218492:web:9b6ba9ee4a00f436f9cb79",
  measurementId: "G-FRBTN84Q2B"
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogleHandler = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);    
    if (result.user) return result.user;
    return null;
  } catch (error) {
    console.error(error);
  }
}

export const getAccountFromAPI = async (email: string | null) => {
  const res = await fetch(`/api/user/get?email=${email ?? ""}`);
  return {res: await res.json(), status: res.status}
}