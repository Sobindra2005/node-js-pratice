const express=require("express")
const app=express()
const mongoose=require("mongoose")
const port =8000
const path=require('path')
const {connectToMongoDB} =require('./connection')
const URL=require('./models/user')
const User=require('./models/authenticate')
const userRouter = require('./routes/user')
const ejsrouter=require('./routes/ejs')
const signupRouter=require('./routes/signup-login')
const {restrictToLoginUserOnly,checkAuthenticate}=require('./middleware/auth')
const cookieParser = require("cookie-parser")
//connecting to mongodb 

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectToMongoDB("mongodb://127.0.0.1:27017/short_url")

app.set("view engine","ejs");
app.set('views',path.resolve("./views") )


app.use('/' , checkAuthenticate, ejsrouter)
app.use('/test/url', restrictToLoginUserOnly,userRouter)
app.use('/', signupRouter)


app.listen(port,(res,req)=>{
    console.log("server started at port :8001")
})
