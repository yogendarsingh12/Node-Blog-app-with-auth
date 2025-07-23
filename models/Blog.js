const mongoose=require('mongoose');
const User=require('./User')


const likeSchema= new mongoose.Schema({
   user:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
   }
})


const CommentSchema= new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
},{timestamps:true})

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    comment:[CommentSchema],
    like:[likeSchema]
},{
    timestamps:true,
})

const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;