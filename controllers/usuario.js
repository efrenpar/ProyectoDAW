const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres',
    define:{
        timestamps: false
    }
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
  
});

module.exports = {
    index(req, res) {
        usuarios = sequelize.import("../models/usuario.js");
        usuarios.findAll({ raw: true, attributes: ['nickname', 'password','rol'] }).then(usuario => {
            var list=[];
            for (var i = 0; i < usuario.length; i++) {
                
                list.push(usuario[i]);
				
            }
			console.log("no entramos");
            res.status(200).send(list);
        }).catch(function (error) {
            res.send(res, error);
        });
    },
    authenticate(req,res){
        console.log(req.body)
        var nickname = req.body.nickname
        var password = req.body.password

        if(!nickname && !password){
            res.status(400).send('{"msg": "bad credentials"}');
        }else{
            usuarios = sequelize.import("../models/usuario.js");
            usuarios.findOne({
                where:{
                    nickname:nickname,
                    password:password
                }
            }).then(user =>{
                res.status(200).send({user:user,sessionId: Buffer.from(user.nickname).toString('base64')})
            }).catch(err => {
                res.status(404).send('{"msg": "busuario no encontrado"}');
            })
        }
    },
    getUser(req, res, next) {
        let idUser  = req.cookies.user || null
        console.log(idUser)
        if(idUser === null){
            next()
        }else{
            idUser = Buffer.from(idUser,'base64').toString('ascii')
            usuarios = sequelize.import("../models/usuario.js");
            usuarios.findOne({
                where:{
                    nickname: idUser
                }
            }).then(function(user){
                res.locals.user = user
                next();
            }).catch(res => {
                next()
            })
        }
        
    },
    getUserByName(req,res){
        idUser = Buffer.from(idUser,'base64').toString('ascii')
        usuarios = sequelize.import("../models/usuario.js");
        usuarios.findOne({
            where:{
                nickname: idUser
            }
        })
    }
}
