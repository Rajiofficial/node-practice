const  mongoose = require("mongoose");

const userdata=new mongoose.Schema({
    name:{
        type: String,
        required:true,
     },
     age:{
       type:String,
       required:true,
     },
     mailid:{
           type:String,
           unique:true,
           trim:true,
     }
})


module.exports=mongoose.model("guestes",userdata)