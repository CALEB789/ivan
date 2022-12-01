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
const author = document.querySelectorAll('.author')
author.innerTEXT = "DJ LUWOMBO BOY"
const par = document.getElementById("par")
const menu = document.getElementById("menu")
const close = document.getElementById("close")
const img = document.getElementById("banner")
const heading = document.getElementById("title")
const site = document.createElement("a")
const post = document.querySelectorAll(".recent .post")
const head = document.querySelectorAll(".recent h3")
alert(post.length)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const orderRef = collection(db,"blog-posts")
const q = query(orderRef,orderBy('publishedAt'))
const querySnap = getDocs(q)
close.addEventListener('click',()=>{
  close.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle("hidden")
}) 
querySnap.then((docs)=>{
  docs.forEach(doc =>{
    const data = doc.data()
    heading.innerHTML =  data.blogTitle
    img.src = data.bannerImage
    par.innerHTML = data.blogPost
    post.forEach((a)=>{
        a.src = data.bannerImage
    })
    head.forEach((c)=>{
      c.innerTEXT = data.blogTitle
    })
  })
})
querySnap.then((posts)=>{
     
})
