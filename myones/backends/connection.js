let mango=require("mongoose");
require("dotenv").config();

let db_url=process.env.URL;
let databasework=async function(){
    mango.connect(db_url).then(()=>{
        console.log("Database Connected")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports=databasework 