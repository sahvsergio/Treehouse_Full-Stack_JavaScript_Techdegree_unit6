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
 
  res.render("project",{projectName:project.project_name
    
  });
});
router.get("/projects:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});


// import the router to be used
module.exports=router;