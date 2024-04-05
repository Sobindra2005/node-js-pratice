const mongoose=require('mongoose')

const urlSchema= new mongoose.Schema({

shortId:{
    type:String,
    required:true,
    unique:true
},

redirectURL:{
    type:String,
    required:true
},
visitHistroy:[{timestamp: {type: Number}}],
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
}

}
,{timestamps:true}
)

const URL=mongoose.model("user",urlSchema)

module.exports=URL;