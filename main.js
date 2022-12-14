const express = require('express')
const path = require('path')
let initial_path = __dirname
let admin = "admin"
const port = process.env.PORT || 4000
const app = express()
app.use(express.static(initial_path))
app.get('/',(req,res)=>{
  res.sendFile(path.join(initial_path,"index.html"))
});

app.get("/admin",(req,res)=>{
    res.sendFile(path.join("admin","index.html"))
})
app.get("/admin/login",(req,res)=>{
  res.sendFile(path.join(initial_path,"login.html"))
})
app.get('/:blogId',(req,res)=>{
  res.sendFile(path.join(initial_path,"blog.html"))
})
app.use((req,res)=>{
  res.send('404')
})
app.listen(port,()=>{
  console.log(`listening on Port ${port}`)
})
