import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDQ1vp3iguNiHvwdTEYT5leI0qOQfO6HOo",
    authDomain: "proyectofinalserrano.firebaseapp.com",
    projectId: "proyectofinalserrano",
    storageBucket: "proyectofinalserrano.firebasestorage.app",
    messagingSenderId: "260942430615",
    appId: "1:260942430615:web:d3c76645553d75cfb984d2",
    measurementId: "G-37K9401MV3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  return querySnapshot.docs.map(doc => doc.data());
};
