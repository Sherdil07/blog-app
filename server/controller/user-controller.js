import User from"../model/user.js"



export const signupUser= async (req,res)=>{


try {
    const user=req.body
    const newUser= new User(user) // validation according to the schema on this user
   await newUser.save() // Storing the newuser to database using mongo save funtion



   return res.status(200).json({msg:"signup sucessfull"})
} catch (error) {
    res.status(500).json({msg:"signup not  sucessfull"})
}
    
}  