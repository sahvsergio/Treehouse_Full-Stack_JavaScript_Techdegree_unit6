const express = require("express");

//create the app

const app=express();

//add routes 

app.get('/', (request, response)=>{
    //response.send , sends a 
    response.send('I love Treehouse');


})

//open port for the app

app.listen(3000);
