let express=require("express");
require("dotenv").config();
let user=require("./Collection/user")
let db=require("./connection")
let r=require("./Route/route")
let cors=require("cors")

let port =process.env.PORT || 3002
let application=express();
application.use(cors())
application.use(express.json())
application.use("/pateint/",r)

let user_add=async function(){
    try {
        user.create({
            name:"subhan",
            address:"house 11",
            phone:"031258712",
            age:"20",
            gender:"male"
        })
        console.log("user Record Added")
        
    } catch (error) {
        console.log(error)
        
    }
}
db().then(()=>{
    // add_user()

    application.listen(port,()=>{
        console.log(`server created at http://localhost:${port}/pateint/pateint`)
    })
}).catch((e)=>{
    console.log(e)
})