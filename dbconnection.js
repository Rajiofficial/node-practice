// const mongoose=require("mongoose")

// exports.connect=()=>{
// mongoose.connect("mongodb://localhost:27017/wel",()=>{
//     console.log("connection working")
// })
// }


// -----------connect with mongodb cloud------------

const mongoose=require("mongoose")

exports.connect=()=>{

    
mongoose.connect(process.env.URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
    
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
}
