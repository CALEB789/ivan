import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {doc,collection,getDocs,query,orderBy} from 'firebase/firestore'
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
const head  = document.getElementById('head')
var ImageCont = document.getElementById('image')
var par = document.getElementById('par')
const img = document.getElementById('img')
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const orderRef = collection(db,"blog-posts")
const q = query(orderRef,orderBy('publishedAt'))
const querySnap = getDocs(q)
querySnap.then((docs)=>{
  docs.forEach(doc =>{
    const data = doc.data()
    head.innerHTML =  data.blogTitle
    img.src = data.bannerImage
    par.innerHTML = data.blogPost
  })
<<<<<<< HEAD
})
=======
})
>>>>>>> a8c005c (first commit)
