const express = require('express');
const path= require('path')
const app = express();

app.use(express.static('./protofolio'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./protofolio/project.html'))
})
app.listen(8080,(req,res)=>{
    console.log('you are in the port 8080');
})