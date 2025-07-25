const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const db=require('./db');
const body_parser=require('body-parser')
const verifytoken=require('./middleware/authmiddleware')

//lets import routes
const BlogRoutes=require('./routers/BlogRoutes')
const UserRoutes=require('./routers/UserRoutes');

//use middleware
app.use('/blog',verifytoken,BlogRoutes);
app.use('/user',UserRoutes);





app.listen(port, () => {
  console.log(`We are listening on port ${port}`)
})
