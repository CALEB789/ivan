import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAH5LY2CS1KqvC8H-_j6YUOD_WPcMfJetc",
    authDomain: "dj-luwombo.firebaseapp.com",
    databaseURL: "https://dj-luwombo-default-rtdb.firebaseio.com",
    projectId: "dj-luwombo",
    storageBucket: "dj-luwombo.appspot.com",
    messagingSenderId: "821571669081",
    appId: "1:821571669081:web:9d37c68efaea563516f548",
    measurementId: "G-GVPCFPBMSF"
  };
  const app = initializeApp(firebaseConfig);
  const pub = document.getElementById("pub")
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
const auth = getAuth(app);
pub.addEventListener("click",(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
