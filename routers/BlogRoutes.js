const express=require('express');
const router=express.Router();



//api for fetch all blogs
router.get('/all/:userid',async (req,res)=>{

})
//for create blog api
router.post('/create',async (req,res)=>{
   
})
//for update blog api
router.put('/update/:blogid',async (req,res)=>{

})

//for delete blog api
router.delete('/deleteblog/:id',async (req,res)=>{

})

//api for handle like
router.post('/like/:id',async (req,res)=>{

})
//api for handle dislike
router.delete('/like/:id', async (req, res) => {
});


//api for comments
router.post('/comment/:id',async (req,res)=>{

})

//api for delete comments
router.delete('/comment/:commentid',async (req,res)=>{

})

router.get('/blog/search',async(req,res)=>{

})


module.exports=router;


