const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const db=require('./db');
const body_parser=require('body-parser')

//lets import routes
const BlogRoutes=require('./routers/BlogRoutes')

//use middleware
app.use('/blog',BlogRoutes);





app.listen(port, () => {
  console.log(`We are listening on port ${port}`)
})
