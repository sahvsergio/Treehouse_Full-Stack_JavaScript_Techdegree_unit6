const express = require("express");

//create the app

const app=express();

//set template engine to pug

app.set('view engine', 'pug');

//add routes 

app.get('/', (req, res)=>{
    //res.render , renders a 
    res.render('index');


})

app.get("/about", (req, res) => {
  //res.render , renders a
  res.render("about");
});

app.get("/project:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});
app.get("/projects:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});

//open port for the app

app.listen(3000,()=>{
  console.log('The application is running on localhost:3000');
});
