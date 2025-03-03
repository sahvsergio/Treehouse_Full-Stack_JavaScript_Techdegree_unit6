const express= require('express');
const router=express.Router();


router.get("/", (req, res) => {
  //res.render , renders a
  console.dir(req.body);
  res.render("index");
});

router.get("/about", (req, res) => {
  //res.render , renders a
  res.render("about");
});

router.get("/project:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});
router.get("/projects:id", (req, res) => {
  //res.render , renders a
  res.render("project");
});


// import the router to be used
module.exports=router;