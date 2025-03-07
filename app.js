const express = require("express");




const cookieParser=require('cookie-parser');
//create the app

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));


//set template engine to pug

app.set('view engine', 'pug');



const routes= require('./routes');
//open port for the app

app.use(routes);

app.use((req, res, next)=>{
  const err= new Error('Page Not Found');
  err.status=500;
  next(err);
});


app.use((err, req, res, nex) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error", err);
});


app.use((req, res, next)=>{
  const err= new Error('Page Not Found');
  err.status=404;
  next(err);

});

app.use((err,req, res, nex)=>{
  res.locals.error=err;
  res.status(err.status);
  res.render('page-not-found', err);

})

  
 






app.listen(5000,()=>{
  console.log('The application is running on localhost:5000');
});
