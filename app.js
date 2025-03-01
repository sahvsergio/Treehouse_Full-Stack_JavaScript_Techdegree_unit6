const express = require("express");

//create the app

const app=express();

//add routes 

app.get('/', (req, res)=>{
    //res.send , sends a 
    res.send('I love Treehouse');


})

app.get("/about", (req, res) => {
  //res.send , sends a
  res.send("I love Treehouse");
});

app.get("/project:id", (req, res) => {
  //res.send , sends a
  res.send("I love Treehouse");
});
app.get("/projects:id", (req, res) => {
  //res.send , sends a
  res.send("I love Treehouse");
});

//open port for the app

app.listen(3000);
