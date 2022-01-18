const path=require('path');
const express=require('express');
const hbs=require('hbs');
const app=express();
//D:\nodejss\expressByIshita\src\index.js
const port=8000;

const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials")
app.set("views",templatePath);

app.set("view engine","hbs");
hbs.registerPartials(partialPath)
//app.use(express.static(staticPath))

//template engine
app.get('/',(req,res)=>{
  //console.log(req.query);
  res.render("index",{//no need to write index.hbs 
    chname:"Ish",
  });
});

app.get("/about",(req,res)=>{
  res.render("about",{
    name:req.query.name,
  });

});

app.get('*',(req,res)=>{
  res.render("404",{
    errorcomment:"oopppsss",
  });

});
app.listen(port,"127.0.0.1",()=>{
  console.log(`Listening from port ${port}`);
})