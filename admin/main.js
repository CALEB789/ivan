import { initializeApp } from "firebase/app";
import { getStorage, ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,setDoc,doc,serverTimestamp,query,orderBy,getDocs} from 'firebase/firestore';
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
var bg
const cont = document.getElementById('cont')
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app);
const orderRef = collection(db,"blog-posts")
const q = query(orderRef,orderBy('publishedAt'))
const querySnap = getDocs(q)
const title = document.querySelector('.title');
const article = document.getElementById('text')
const bannerImage = document.getElementById('banner-upload')
const banner = document.querySelector('.banner')
const publish = document.getElementById('publish')
const upload = document.getElementById("image-upload")
const collectionRef = collection(db,"blog-posts")
bannerImage.addEventListener("change",() =>{
    const storageRef = ref(storage, `blogImages/${bannerImage.files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, bannerImage.files[0]);
    uploadTask.on('state_changed', 
      (snapshot) => {
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
        alert("AN ERROR OCCURED")
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          banner.style.backgroundImage = `url(${downloadURL})`
          bg = downloadURL
        });
      }
    );
    
})
publish.addEventListener('click',()=>{
  setDoc(doc(collectionRef,title.value.split(" ").join("-")),{
     blogPost:article.innerHTML,
     bannerImage:bg,
     publishedAt:serverTimestamp()
     }).then((res)=>{
       location.href = `/${title.value.split(" ").join('-')}`
     })
  })