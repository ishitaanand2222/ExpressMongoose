const http=require('http');
const server=http.createServer((req,res)=>{
  res.end("HEllo from index");

});

server.listen(8000,"127.0.0.1",()=>{
  console.log("request listened");
});