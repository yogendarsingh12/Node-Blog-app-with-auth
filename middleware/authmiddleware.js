const jwt= require('jsonwebtoken');


const verifytoken=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1] //bariar token
    if(!token) {
        res.status(404).json({message:"access denid No token provided"})
    }
    try {
        const verify=jwt.verify(token,process.env.ACCESS_SECRET_TOKENKEY);
        req.user=verify
        next()
        
    } catch (error) {
        console.log('error',error);
        
    }

}

module.exports=verifytoken;