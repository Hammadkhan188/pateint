let express=require("express");
let route=express.Router();
let func=require("../Function/logic")

route.get("/i",func.home)
route.post("/reg",func.register_user)
route.get("/users",func.get_user)

module.exports=route