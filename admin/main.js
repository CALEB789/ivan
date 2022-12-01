import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup}from "firebase/auth"
import {getFirestore,collection,setDoc,doc,serverTimestamp,query,orderBy,getDocs,deleteDoc} from 'firebase/firestore';
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
const blogPar = document.getElementById('blog-par')
const blogImage = document.getElementById('blog-image')
const titleBlog = document.getElementById('title')
const deleteBlog = document.getElementById('delete')
const cont = document.getElementById('cont')
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const orderRef = collection(db,"blog-posts")
const q = query(orderRef,orderBy('publishedAt'))
const querySnap = getDocs(q)
const title = document.querySelector('.title');
const article = document.querySelector('.article')
const bannerImage = document.getElementById('banner-upload')
const banner = document.querySelector('.banner')
const publish = document.getElementById("publish")
const upload = document.getElementById("image-upload")
var image = []
const collectionRef = collection(db,"blog-posts")
bannerImage.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    banner.style.backgroundImage = `url(${uploaded_image})`;
    image.push(uploaded_image)
})
reader.readAsDataURL(this.files[0]);
})
publish.addEventListener('click',()=>{
  setDoc(doc(collectionRef,title.value.split(" ").join("-")),{
    blogTitle:title.value,
     blogPost:article.value,
     bannerImage:image[0],
     publishedAt:serverTimestamp()
     }).then((res)=>{
       location.href = `/${title.value.split(" ").join('-')}`
     })
  })
querySnap.then((docs)=>{
    
      })