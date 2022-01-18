const mongoose =require("mongoose");
//connection creation and creating a db
mongoose.connect("mongodb://localhost:27017/ishuanand").then(()=>console.log("success"))
.catch((err)=>console.log(err));

//schema(structure)

const playListSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  ctype:String,
  videos:Number,
  active:Boolean,
  author:String,
  date:{
    type:Date,
    default:Date.now
  }
})

//mongoose models

const Playlist=new mongoose.model("Playlist",playListSchema);

const createDocument=async()=>{
  try{
    const jsPlaylist=new Playlist({
      name:"JS",
      ctype:"Front End",
      videos:80,
      author:"Ishita Anand",
      active:true
    
    })
    const mongoPlaylist=new Playlist({
      name:"MongoDB",
      ctype:"Database",
      videos:10,
      author:"Ishita Anand",
      active:true
    
    })
    const mongoosePlaylist=new Playlist({
      name:"Mongoose",
      ctype:"Database",
      videos:4,
      author:"Ishita Anand",
      active:true
    
    })
    const expressPlaylist=new Playlist({
      name:"Express JS",
      ctype:"Back End",
      videos:80,
      author:"Ishita Anand",
      active:true
    
    })
    const reactPlaylist=new Playlist({
      name:"Node JS",
      ctype:"Back End",
      videos:80,
      author:"Ishita Anand",
      active:true
    
    })
    const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist,reactPlaylist

    ]);//reactPlaylist.save() returns promise
  console.log(result);

  }catch(err){
    console.log(err);

  }
  

  
}
createDocument();

const getDocument=async()=>{
  try{
    const result=await Playlist
  .find({$or:[{ctype:"Back End"},{author:"Ishita Anand"}]})
  .select({name:1})
  .count();
  //.limit(1);//find gives promise hence we use await
  console.log(result);

  }
  catch(err){
    console.log(err);
  }
  

}





getDocument();