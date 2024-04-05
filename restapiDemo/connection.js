let mongoose = require("mongoose");
async function connectMongoDB (url){
    console.log("mongodb is now successfully connected !!")
    return mongoose
    .connect(url)
}
module.exports={connectMongoDB};