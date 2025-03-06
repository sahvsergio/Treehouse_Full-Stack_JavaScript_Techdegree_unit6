const express= require('express');
const router=express.Router();
const { projects } = require("../data.json");


const myName='Sergio Andrés Herrera Velásquez'
router.get("/", (req, res) => {
  //res.render , renders a
  console.dir(req.body);
 

  res.render("index", {projects});
});

router.get("/about", (req, res) => {

  //res.render , renders a
  res.render("about");
});

router.get("/project/:id", (req, res) => {
  //res.render , renders 
  let project= projects[req.params.id];
 
  res.render("project",{projectName:project.project_name});
});



function errorHandler(err, req, res, next) {
  res.status(404);
  res.render("404", { error: err });
}

// import the router to be used
module.exports=router;