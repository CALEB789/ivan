import { initializeApp } from "firebase/app";
import { getStorage, ref,uploadBytesResumable } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
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
const titleBlog = document.getElementById('blog-title')
const deleteBlog = document.getElementById('delete')
const cont = document.getElementById('cont')
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app);
const orderRef = collection(db,"blog-posts")
const q = query(orderRef,orderBy('publishedAt'))
const querySnap = getDocs(q)
const title = document.querySelector('.title');
const article = document.querySelector('.article')
const bannerImage = document.getElementById('banner-upload')
const banner = document.querySelector('.banner')
const publish = document.querySelector('.publish-btn')
const upload = document.getElementById("image-upload")
var image = []
const mountainsRef = ref(storage, 'mountains.jpg');
const collectionRef = collection(db,"blog-posts")
bannerImage.addEventListener("change", function() {
  const storageRef = ref(storage, `images/${this.files[0]}`)
    const uploadTask = uploadBytesResumable(storageRef, this.files[0]);
    banner.style.backgroundImage = `url(${uploaded_image})`;
    ;
    uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      alert("error occured")
    }
    )

})
publish.addEventListener('click',()=>{
  setDoc(doc(collectionRef,title.value.split(" ").join("-")),{
    blogTitle:title.innerHTML,
     blogPost:article.innerHTML,
     bannerImage:image[0],
     publishedAt:serverTimestamp()
     }).then((res)=>{
       location.href = `/${title.value.split(" ").join('-')}`
     })
  })