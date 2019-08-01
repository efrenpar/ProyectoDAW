const express = require('express');
const app = express();
const path = require("path");
var router = express.Router();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("galeria","root","root",{
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log("GET/index");
});

router.get('/work',function(req,res){
    res.sendFile(path.join(__dirname+'/work.html'));
    console.log("GET/work");
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
    console.log("GET/about");

});

router.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
    console.log("GET/blog");

});


router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
    console.log("GET/contact");

});




app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));

app.use('/',router);

app.use(function(req, res, next) {

  
    res.status(404).send("page not found");
    console.error(res.statusCode+"page not found");
  
  });

app.listen(process.env.port || 8000);
console.log("running at port 8000");