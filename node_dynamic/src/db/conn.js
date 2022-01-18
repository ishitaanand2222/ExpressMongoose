const mongoose =require('mongoose');

//creating a db
mongoose.connect("mongodb://localhost:27017/ishitadynamic").then(()=>{
  console.log("Connection is a success");
}).catch((error)=>{
  console.log(error);
})