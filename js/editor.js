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
const titleBlog = document.getElementById('blog-title')
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
const publish = document.querySelector('.publish-btn')
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
    const deletebtn = document.createElement('a')
      docs.forEach((doc)=>{
        const data = doc.data()
        const div = document.createElement('div')
        const image = document.createElement('img')
        const div2 = document.createElement('div')
        const h5 = document.createElement('h5')
        h5.setAttribute('class','text-gray-900 font-bold text-2xl tracking-tight mb-2')
        h5.innerText = data.blogTitle
        div2.classList.add('p-5')
        const blogp = document.createElement('p')
        const openBlog = document.createElement('a')
        const deletebtn = document.createElement('a')
        deletebtn.setAttribute('class','text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center')
        deletebtn.innerText = "Delete Post"
        blogp.setAttribute('class','font-normal text-gray-700 mb-3')
        div.setAttribute('class','bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5')
        openBlog.setAttribute('class',"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center")
        openBlog.href =`${data.blogTitle.split(' ').join('-')}`
        openBlog.innerText = "Open Blog"
        image.classList.add('rounded-t-lg')
        image.src = data.bannerImage
        blogp.innerText = data.blogPost.substring(0,200)+"..."
        div.appendChild(image)
        div2.appendChild(h5)
        div2.appendChild(blogp)
        div2.appendChild(openBlog)
        div2.appendChild(deletebtn)
        div.appendChild(div2)
        cont.appendChild(div)
      })
    })