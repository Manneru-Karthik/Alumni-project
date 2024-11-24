
const express= require('express');
const app=express();
const mongoose=require("mongoose");
const routes=require("./routes/route");
const session= require('express-session');
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


    