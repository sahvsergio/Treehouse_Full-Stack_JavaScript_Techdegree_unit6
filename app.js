const express = require("express");




const cookieParser=require('cookie-parser');
//create the app

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use('/static', express.static('public'));

//set template engine to pug

app.set('view engine', 'pug');


const routes= require('./routes');
//open port for the app

app.use(routes);

app.listen(5000,()=>{
  console.log('The application is running on localhost:3000');
});
