const express=require('express');
const router=express.Router();
const multer=require('multer');
const User=require('./../models/User');
const path=require('path');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/data');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});


const uploads=multer({storage})



//api for login user
router.post('/login',async (req,res)=>{

})
//api for signup user
router.post('/signup',uploads.single('profilepic'),async (req,res)=>{
    try {
        const image=req.file;
        const fileurl=`uploads/data/${image.filename}`;
        const {username,password,email}=req.body;
        const Newuser= new User({
            username:username,
            password:password,
            email:email,
            profilepic:fileurl,

        })
        const saved=await Newuser.save()
        console.log("user is saved")
        res.status(201).json(saved);
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
        
    }

})

//api for update password
router.put('/updateuser/:id',async (req,res)=>{

})

//api for update email

router.put('/updateuseremail/:id',async (req,res)=>{

})




module.exports=router;


