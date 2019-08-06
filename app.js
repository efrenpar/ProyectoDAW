const express = require('express');
const app = express();
const path = require("path");
var router = express.Router();
const Sequelize = require("sequelize");
const body_parser = require('body-parser');


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log("GET index.html");
});

router.get('/work',function(req,res){
    res.sendFile(path.join(__dirname+'/work.html'));
    console.log("GET work.html");
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
    console.log("GET about.html");

});

router.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
    console.log("GET blog.html");

});


router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
    console.log("GET contact.html");

});

router.get('/admin',function(req,res){
    res.sendFile(path.join(__dirname+'/admin.html'));
    console.log("GET admin.html");

});


app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));
app.use('/data',express.static('data'));
app.use('/fonts',express.static('fonts'));
app.use('/fonts',express.static('sass'));
app.use('/',router);
app.use(body_parser.json());

app.use(function(req, res, next) {
    res.status(404).send("page not found");
    console.error(res.statusCode+"page not found");
  
  });

app.listen(process.env.port || 5000);
console.log("running at port 5000");