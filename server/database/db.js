import mongoose from "mongoose";
 const Connection = async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@blog-app.r2xqxqo.mongodb.net/?retryWrites=true&w=majority`;
try {
   await  mongoose.connect(URL);
   console.log("database connected sucessfully")
} catch (error) {
    console.log('database not connected sucessfully', error)
}   
}

export default Connection;