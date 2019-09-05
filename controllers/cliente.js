const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    getCliente(req, res) {
		console.log(req.params.nickname);
		clientes = sequelize.import("../models/cliente.js");
       clientes.findOne({
                where:{
                    cl_nickname: req.params.nickname
                }
            }).then(function(cliente){
                res.send(cliente)
            }).catch(err => {
                res.status(404).send('{"msg": "bad credentials"}');
            })
    }
}
