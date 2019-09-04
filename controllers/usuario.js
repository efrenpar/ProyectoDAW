const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
  
});

module.exports = {
    index(req, res) {
        usuarios = sequelize.import("../models/usuario.js");
        usuarios.findAll({ raw: true, attributes: ['nickname', 'password'] }).then(usuario => {
            var list=[];
            for (var i = 0; i < usuario.length; i++) {
                var cadena = usuario[i].nickname + " " + usuario[i].password +" "+ usuario[i].rol_usuario;
                list.push(cadena);
				
            }
			console.log("no entramos");
            res.status(200).send(list);
        }).catch(function (error) {
            res.send(res, error);
        });
    },
}
