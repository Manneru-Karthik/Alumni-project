
const express= require('express');
const app=express();
const mongoose=require("mongoose");
const routes=require("./routes/route");
const session= require('express-session');
const MongoStore = require('connect-mongo');
const chatroutes= require('./routes/chatRoutes');
const messageroutes= require('./routes/messageRoutes');
const uploadroutes= require('./routes/uploadroute');
const eventroutes= require('./routes/eventRoute');
const cors= require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGOOSE_URL);



app.use("/alumnitracking",routes,chatroutes,messageroutes,uploadroutes,eventroutes);
const server=app.listen(process.env.PORT,()=> {
    console.log(`Server established at ${process.env.PORT}`)});


    const io= require("socket.io")(server,{
        cors:{
          origin:"*",
        },
        pingTimeout:60000,
      });
      
      io.on("connection",(socket)=>{
      
        socket.on("setup",(user)=>{
          socket.join(user.data._id);
      
          socket.emit("connected");
        });
      
        socket.on("join chat",(room)=>{
          socket.join(room);
        });
      
        socket.on("new message",(newMessageStatus)=>{
          var chat= newMessageStatus.chat;
          if(!chat.users){
            return console.log("chat.users not defined");
          }
          chat.users.forEach((user)=> {
            if(user._id== newMessageStatus.sender._id) return;
      
            socket.in(user._id).emit("Message received",newMessageReceived);
          });
      
        });
      });