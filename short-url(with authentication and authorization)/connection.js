let mongoose=require('mongoose')

async function connectToMongoDB(url){
    return mongoose.connect(url).then(()=>{
        console.log("mongodb is connected !!")
    })
    .catch((err)=>{
        console.log("some error occured while connecting the mongo db !!")
    })
}

module.exports={connectToMongoDB}