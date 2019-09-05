const express = require('express');
const app = express();
const path = require("path");
var router = express.Router();
const fileUpload = require('express-fileupload');
const body_parser = require('body-parser');
artistas = require('./controllers/artistas');
cuadros = require('./controllers/cuadros');

app.use(fileUpload());
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/work',function(req,res){
    res.sendFile(path.join(__dirname+'/public/work.html'));
});

router.get('/qrcode',function(req,res){
    res.sendFile(path.join(__dirname+'/public/qrcode.html'));
});

router.get('/dashboard',function(req,res){
    res.sendFile(path.join(__dirname+'/public/dashboard.html'));
});


router.get('/reportes',function(req,res){
    res.sendFile(path.join(__dirname+'/public/reportes.html'));
});

router.get('/artistas',artistas.index);
router.get('/cuadros/:idArtista',cuadros.find);

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/public/about.html'));

});

router.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/public/blog.html'));

});

router.get('/upload',function(req,res){
    res.sendFile(path.join(__dirname+'/public/upload.html'));

});

router.get('/chart/:id',function(req,res){
res.sendFile(path.join(__dirname+'/data/chart'+req.params.id+".json"));
});

router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});

router.post('/upload/images',function(req,res){
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
      }
      else{
        var aux=req.files.image
        for(let i=0;i<aux.length;i++){
            aux[i].mv('./uploads/images/' + aux[i].name , function(err) {    
           });

        }
       
      }
      res.redirect('back');
});


app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/uploads/images',express.static('uploads/images'));
app.use('/js',express.static('js'));
app.use('/data',express.static('data'));
app.use('/fonts',express.static('fonts'));
app.use('/fonts',express.static('sass'));
app.use('/',router);
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.status(404).send("page not found");
    console.error(res.statusCode+"page not found");
  
  });

const host = '0.0.0.0';
const port = process.env.PORT || 3000;  
  
app.listen(port, host, function() {
  console.log("Server started.......");
});