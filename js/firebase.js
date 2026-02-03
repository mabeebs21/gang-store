import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDSDZURuJzdvQ0rEbiOM7VolkPB1ifrJGY",
  authDomain: "gang-store-a33b7.firebaseapp.com",
  projectId: "gang-store-a33b7"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
