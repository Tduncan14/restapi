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



//  app.get('/',(req,res,next)=>{
     
//     res.send('Hello world');
//  })

//  app.post('/',(req,res,next) =>{

//     res.send('Recieved a post http method');
//  });

//  app.put ('/:userId', (req,res,next) =>{

//    res.send('put http method');
//  })


//  app.delete('/:userId',(req,res,next) =>{

//    res.send('this is the delete post');
//  })


let users = {
   1: {
     id: '1',
     username: 'Robin Wieruch',
   },
   2: {
     id: '2',
     username: 'Dave Davids',
   },
 };
 
 let messages = {
   1: {
     id: '1',
     text: 'Hello World',
     userId: '1',
   },
   2: {
     id: '2',
     text: 'By World',
     userId: '2',
   },
 };
 

let message={};


app.get('/users/',(req,res,next) => {

   return res.send(Object.values(users))
});

app.get('/users/:userId', (req, res) => {
   return res.send(users[req.params.userId]);
 });


app.get('/message',(req,res,next) =>{

   return res.send(Object.values(messages));
})

app.get('/message/:messagesId',(req,res,next) =>{


   return res.send(message[req.params.messagesIdd]);


})

 /////////////////////////////////////////////////////////

app.post('/users' ,(req,res,next)=>{
    res.send('Post http method for the users');
})


app.put('/users/:userId', (req,res) =>{

   res.send(`you to select certain users ${req.params.userId}`)
})


app.delete('/users/:userId',(req,res) =>{
   res.send(`you to select certain users ${req.params.userId}`)
})

let PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})



