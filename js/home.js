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
const post = document.querySelectorAll(".recent .post")
const head = document.querySelectorAll(".recent h3")
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
const tiles = []
const summ = []
const blogImage = []
querySnap.then((docs)=>{
  docs.forEach(doc =>{
    const data = doc.data()
    heading.innerHTML =  data.blogTitle
    img.src = data.bannerImage
    par.innerHTML = data.blogPost
    tiles.push(data.blogTitle)
    summ.push(data.blogPost)
    blogImage.push(data.bannerImage)
  })

for(let h = 0; h<blogImage.length;h++){
  post.forEach((g)=>{
    post[0].src= blogImage[blogImage.length-1]
  })
  for(let i = 0;i<tiles.length;i++){
    for(let v = 0; v<head.length;v++){
             head[0].innerHTML = tiles[tiles.length-1]
             head[1].innerHTML = tiles[0]
             head[2].innerHTML = tiles[1]
             head[3].innerHTML = tiles[2]
    }
  }
   }
})
let slideIndex = 0;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}