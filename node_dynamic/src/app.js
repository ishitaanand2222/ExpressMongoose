const express=require('express');
const path=require('path');
//to connect your db
require("./db/conn");
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 3000
//setting path for middleware
const staticpath=path.join(__dirname,'../public');
const templatepath=path.join(__dirname,'../templates/views');
const partialpath=path.join(__dirname,'../templates/partials');
//middleware
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.use(express.static(staticpath));
app.set("view engine","hbs");
//customizing views
app.set("views",templatepath);
hbs.registerPartials(partialpath);
//routing
app.get("/",(req,res)=>{
 res.render("index");
})
app.get("/contact",(req,res)=>{
  res.render("contact");
 })
 app.get("/service",(req,res)=>{
   res.render("service");
 })
 app.get("/about",(req,res)=>{
  res.render("about");
})
 app.get("/gallery",(req,res)=>{
  res.render("gallery");
})

app.listen(port,()=>{
  console.log(`Listening at port :${port}`)
})