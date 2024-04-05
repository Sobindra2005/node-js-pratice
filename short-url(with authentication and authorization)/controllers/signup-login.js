const User=require('../models/authenticate')
const URL=require('../models/user')
const {v4:uuidv4}=require('uuid')
const{setUser,getUser}=require('../service/auth')


async function handleUserSignup(req,res){
const {name,email,password}=req.body
await User.create({
    name,  
    email,
    password
})
const allurls=await URL.find();
return res.render("login");

}
async function handleUserLogin(req,res){
    const{email,password}=req.body;
const user=await User.findOne({email,password})
if(!user){
    return res.render("login",{
        error:"wrong email or password"
    });
}

const token = setUser(user)
 return res.json({ token })
 }

module.exports={handleUserLogin,handleUserSignup}