const mongoose= require("mongoose");
const models=new mongoose.Schema({
    name:{
       type: String,
       required:true,
    },
    age:{
      type:Number,
      required:true,
    },
    mail_id:{
          type:String,
          unique:true,
          trim:true,
          required:'email address is required',
          validate:'please fill up valid email address',
          
    }
})
module.exports=mongoose.model("scehmamodel",models)
