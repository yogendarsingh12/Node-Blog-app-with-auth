const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const db=require('./db');
const body_parser=require('body-parser')


app.use(express.static(path.join(__dirname,'./views')))



app.get('/', (req, res) => {
  
 
  res.sendFile(path.join(__dirname,'views','login.html'))

})

app.post('/signup',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','signup.html'))

})


app.listen(port, () => {
  console.log(`We are listening on port ${port}`)
})
