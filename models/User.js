const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        default:'https://i.pravatar.cc/150?img=12',
    },
    date_of_birth:{
        type:Date,
        required:true,
    },
    
},{
    timestamps:true,
})

const User=mongoose.model('User',UserSchema);

module.exports=User;