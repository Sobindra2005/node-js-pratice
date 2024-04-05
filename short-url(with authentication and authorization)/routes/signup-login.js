const express=require("express")
const router=express.Router()
const mongoose=require('mongoose')
const User=require('../models/authenticate')
const{handleUserLogin, handleUserSignup}=require('../controllers/signup-login')


router.get('/signup',(req,res)=>{
    res.render("signup")
})
router.get('/login',(req,res)=>{
    res.render("login")
})
router.post('/signup',handleUserSignup)
router.post('/login',handleUserLogin)

module.exports=router;