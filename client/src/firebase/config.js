import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGdB3TiJ_zWmn4CRrpC2LymBCyclgc2dk",
  authDomain: "ie-mm-a2c59.firebaseapp.com",
  projectId: "ie-mm-a2c59",
  storageBucket: "ie-mm-a2c59.appspot.com",
  messagingSenderId: "883591730783",
  appId: "1:883591730783:web:cf7780cf3d295e3d3eedea"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseFirestore = getFirestore(firebaseApp);