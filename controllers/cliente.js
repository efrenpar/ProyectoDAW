const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    getCliente(req, res, next) {
        console.log("se recibe el parametro "+req.params.nickname)
        var infoCliente = [];
        clientes = sequelize.import("../models/cliente.js");
        usuarios = sequelize.import("../models/usuario.js");
        clientes.findOne({
            where:{
                cl_nickname:req.params.nickname
            }
        }).then(function(cliente){
            infoCliente.push(cliente);
            usuarios.findOne({
                where:{
                    nickname:req.params.nickname
                }
            }).then(function(usuario){
                infoCliente.push(usuario);
                res.send(infoCliente);
            }
            )
        })
    },
    setCliente(req,res){
        console.log(req.body);
        usuarios = sequelize.import("../models/usuario.js");
        clientes = sequelize.import("../models/cliente.js");
        usuarios.create({
            nickname: req.body.nickname,
            password:req.body.password,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            rol:req.body.rol,
            correo:req.body.correo
        }).then(newUsuario => {
            console.log(`New ${newUsuario.nombre}, with nickname ${newUsuario.nickname} has been created.`);
            clientes.create({
                ciudad:req.body.ciudad,
                pais:req.body.pais,
                cl_nickname:req.body.nickname,
                descripcion:req.body.descripcion,
                id:req.body.id
            }).then(newCliente =>{
                console.log(`New ${newCliente.nombre}, with nickname ${newCliente.nickname} has been created.`);
                res.end();
            })
            
        })
    }
}
