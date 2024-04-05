const express=require('express');
var app = express();

app.get('/home',(req,res)=>{
    
    res.json([{name:'sobhindra'},{name:'rahul'}])

});

app.listen(5500,()=>{
    console.log('you are in the port 5000 <samaj aaya!')
});