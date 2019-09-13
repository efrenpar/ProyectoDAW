const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");
var router = express.Router();
const body_parser = require('body-parser');
artistas = require('./controllers/artistas');
//cuadros = require('./controllers/cuadros');
cliente = require('./controllers/cliente');
usuario = require('./controllers/usuario');
usuarioModel = require('./models/usuario');
var session = require('express-session')
const cookieParser = require('cookie-parser')

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

router.get('/correos',function(req,res){
    res.sendFile(path.join(__dirname+'/public/correos.html'));
});

router.get('/reportes',function(req,res){
    res.sendFile(path.join(__dirname+'/public/reportes.html'));
});

//router.get('/artistas',artistas.index);
//router.post('/cuadros/:idArtista',cuadros.find);
router.get('/usuarios',usuario.index)
router.post('/usuarios',usuario.authenticate)
router.get('/cliente/:nickname',cliente.getCliente)
router.post('/cliente',cliente.setCliente)

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/public/about.html'));

});

router.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/public/blog.html'));

});

router.get('/chart/:id',function(req,res){
res.sendFile(path.join(__dirname+'/data/chart'+req.params.id+".json"));
});

router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/public/loginForm.html'));
});

router.get('/signUp',function(req,res){
    res.sendFile(path.join(__dirname+'/public/signUp.html'));
});

router.get('/perfil',function(req,res){
    console.log("perfil "+res.locals.user)
    if(res.locals.user){
        res.sendFile(path.join(__dirname+'/public/perfil.html'));
    }else{
        res.redirect('/login')
    }
});

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(cookieParser())
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(usuario.getUser);
app.use(cors());
app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));
app.use('/data',express.static('data'));
app.use('/fonts',express.static('fonts'));
app.use('/fonts',express.static('sass'));
app.use('/',router);


app.use(function(req, res, next) {
    res.status(404).send("page not found");
    console.error(res.statusCode+"page not found");
  
  });

const host = '0.0.0.0';
const port = process.env.PORT || 3000;  
  
app.listen(port, host, function() {
  console.log("Server started.......");
});