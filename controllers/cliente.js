const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    getCliente(req, res, next) {
        clientes = sequelize.import("../models/cliente.js");
        clientes.findOne({
			where:{
				cl_nickname: req.params.nickname
			}

		}).then(function(user){
                res.send(user);
            }).catch(err => {
                res.status(404).send('{"msg": "usuario no encontrado"}');
            })
    }
}
