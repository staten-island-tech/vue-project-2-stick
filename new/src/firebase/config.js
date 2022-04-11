/* import { ref } from "vue"; */
import { getAuth } from "firebase/auth";
/* import { getDatabase, set } from "firebase/database"; */

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9O3EYgQgkpg1bodjGvMAsWcKM0-ykjw",
  authDomain: "vuex-4-fb-auth-a48cb.firebaseapp.com",
  databaseURL: "https://vuex-4-fb-auth-a48cb-default-rtdb.firebaseio.com",
  projectId: "vuex-4-fb-auth-a48cb",
  storageBucket: "vuex-4-fb-auth-a48cb.appspot.com",
  messagingSenderId: "645472278213",
  appId: "1:645472278213:web:4ecb0c2eb95a566ffa02ac",
};

// Initialize Firebase

//init
const app = initializeApp(firebaseConfig);

//init firebase auth

const auth = getAuth();

export { auth, app };
