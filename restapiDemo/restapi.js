const express= require('express')
const app=express()
const port=8000;
const fs = require('fs')
const users=require('./MOCK_DATA.json')

app.use(express.urlencoded({ extended:false }))

//listening the local server 
app.listen(port, ()=>{
    console.log('server is started in port 8000')
})

//return all users in json form 
app.get("/api/users",(req,res)=>{
    return res.json(users)
})

//return all users in html form 
app.get("/users",(req,res)=>{
const html=`<ul>
${users.map((user)=>`<li>${user.first_name} ${user.last_name}</li><br>`
)}
</ul>
`;
res.send(html);
})

//get user details with the requested id 
app.get("/api/users/:id",(req,res)=>{
const id =Number(req.params.id)
const user =users.find((user)=>{if(user.id===id){
    return user 
}})
return res.json(user);
})

//create the new user according to the request 
app.post("/api/users",(req,res)=>{

if (!body.first_name || !body.last_name || !body.email ||!body.gender )
{
    res.statusCode(404).send("all fields are requiresd")
}
const body=req.body;
users.push({...body, id: users.length + 1})
fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"sucess",id: users.length});
})

})
