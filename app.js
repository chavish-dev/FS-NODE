// u4mrj8SZwEWURAgI\
require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
// const userRouter =require('./routes')
const bodyParser = require('body-parser');
///
const app=express();
app.use(bodyParser.json());
// app.use('/tasks', userRouter);

//  const CONECTION_URL='mongodb+srv://programmer1711:u4mrj8SZwEWURAgI@cluster0.kmkbl1m.mongodb.net/todos?retryWrites=true&w=majority';
 const PORT=process.env.PORT;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
