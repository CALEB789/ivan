const express = require('express')
const path = require('path')
let initial_path = path.join(__dirname)
const port = process.env.PORT || 4000
const app = express()
app.use(express.static(initial_path))
app.get('/',(req,res)=>{
  res.sendFile(path.join(initial_path,"index.html"))
});
app.get('/editor',(req,res)=>{
res.sendFile(path.join(initial_path,"editor.html"))
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
