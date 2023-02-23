const express=require("express");

const {connection} = require("./configs/db");
const {UserRouter}=require("./routes/user.routes");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(`<h1>Home page Here is present in the page</h1>`);
})


app.use("/users",UserRouter);
//app.use
app.listen(1700,async(req,res)=>{
      try{
         await connection;
         console.log("the server is connected at port 1700");
      }
      catch(err){
        console.log("The server is not connected");
      }
})