let express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user get the response ');
    res.status(200).send("you are in the port 8080");
});

app.get('/about',(req,res)=>{
    res.status(200).send('you are in the about section ')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h3>resource not found !</h4>')
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});



// app.post
// app.put
// app.get 
// app.delete 
// app.all
//app.use 
//app.listen 
