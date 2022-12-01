// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,Timestamp,collection,doc,getDoc} from "firebase/firestore"
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
const analytics = getAnalytics(app);
let blogId = decodeURI(location.pathname.split('/').pop())
let db = getFirestore(app)
const collectionRef = collection(db,'blog-posts')
let docRef = doc(collectionRef,blogId)
const docu = getDoc(docRef)
docu.then((docs)=>{
  if(docs.exists()){
    setupBlog(docs.data())
  }else{
    location.replace('/')
  }
})
const open = document.getElementById("open")
const setupBlog = (data)=>{
  const banner = document.getElementById('banner')
  const blogtt = document.getElementById('title')
  const titleTag = document.querySelector('title')
  const publish = document.getElementById('pub')
  const par = document.getElementById("par")
  par.innerHTML = data.blogPost
  banner.src =data.bannerImage
  titleTag.innerHTML += blogtt.innerHTML = data.blogTitle
  blogtt.innerTEXT = data.blogTitle
publish.innerHTML += data.publishedAt.toDate()
const article = document.querySelector('.article')
addArticle(article,data.blogPost)
}
const addArticle = (ele,data)=>{
  data = data.split('\n').filter(item => item.length)
}
