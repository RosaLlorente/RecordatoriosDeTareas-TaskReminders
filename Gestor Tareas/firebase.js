import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCay7ZLdzg-JLOsC3hH1wsxI_GVojlHQ48",
    authDomain: "gestornotas-488c9.firebaseapp.com",
    projectId: "gestornotas-488c9",
    storageBucket: "gestornotas-488c9.firebasestorage.app",
    messagingSenderId: "759645892625",
    appId: "1:759645892625:web:611f5afcfde155f94a41b0",
    measurementId: "G-P9SKQMJ0YJ"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const TareasRef = collection(db, 'Tareas')