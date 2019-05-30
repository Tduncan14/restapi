const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const mongod = require('mongodb');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('logger');
var sys = require('util');




 const app = express();


 app.use(cors());
 app.use(helmet());



 app.get('/',(req,res,next)=>{
     
    res.send('Hello world');
 })

 app.get('/test',(req,res,next) =>{

    res.send('this is a fork of bitcoin');
 })




let PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})



