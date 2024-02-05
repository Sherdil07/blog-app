import mongoose from "mongoose";

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});


const user =mongoose.model=("user",userSchema) // on which collection i have to apply this schema user collection name 
export default user ;

