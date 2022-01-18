const mongoose=require('mongoose');

//creating db
 mongoose.connect("mongodb://localhost:27017/ishitadynamic").then(()=>{
  console.log("connection is a success");
}).catch((error)=>{
  console.log(error);
})