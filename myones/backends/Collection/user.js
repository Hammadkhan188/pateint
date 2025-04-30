let mongo= require("mongoose");

let user_collection=mongo.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true,
        

    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongo.model("user",user_collection)