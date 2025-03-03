const express= require('express');
const router=express.Router();
const { projects } = require("../data.json");
console.log(projects);

router.get("/", (req, res) => {
  //res.render , renders a
  console.dir(req.body);
  res.render("index");
});

router.get("/about", (req, res) => {

  //res.render , renders a
  res.render("about");
});

router.get("/project/:id", (req, res) => {
  //res.render , renders a

 
  res.render("project",{project:projects[req.params.id].project_name
  });
});
router.get("/projects:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});


// import the router to be used
module.exports=router;