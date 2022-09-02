const express=require("express")
const {connect}=require('./dbconnection')
const guestes=require('./studentdetails')
require("dotenv").config()
// const students=require("./routes/students")

const app=express();
app.use(express.json())
connect()

const student=[

{
id:"1",
name:"raji",
department:"msc" 
},
{
    id:"2",
name:"ranjith",
department:"msc" 
}
]

app.get('/',(req,res)=>{
      res.status(200).send(student)
  })
  

app.get('/:id',(req,res)=>{
  try{ 
  let id=req.params.id
  console.log(id)
  let data=[]
 data=student.filter(stu=>stu.id===id)
    res.status(200).send(data)
  }catch{
    res.status(401).send("error")
  }
})


app.post("/find",(req,res)=>{
   try{
    console.log("post request",req.body)
    let studentsname= new guestes(req.body)
    studentsname.save((err,data)=>{
        if(err || !data){
          console.log(err)
            return {status:(400),message:"error the data"}
           
        }
        return res.status(201).send(data)
    
    })
}catch(err){
    console.log("error100")
}
})

port = process.env.PORT 

app.listen(port,()=>{
    console.log(`app is running on ${port} 🚀 `)
})