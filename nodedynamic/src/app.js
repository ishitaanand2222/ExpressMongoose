const express= require('express');
const path =require('path');
//const hbs=require('hbs');
require("./db/conn");

const app=express();
const port=process.env.PORT || 3000;

//creating path
const staticpath=path.join(__dirname,"../public");//..->to get out of src folder

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));//we passed "../node_modules/bootsrap/dist/css" to '/css'
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.set("view engine","hbs");

//routing
app.get("/",(req,res)=>{
  res.render("index");
});
app.get("/contact",(req,res)=>{
  res.render("contact");
})
app.listen(port,()=>{
  console.log(`listening at port ${port}`);
})