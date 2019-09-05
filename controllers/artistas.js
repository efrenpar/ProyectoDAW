const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    index(req, res) {
        artistas = sequelize.import("../models/artista.js");
        artistas.findAll({ raw: true, attributes: ['nombre', 'apellido'] }).then(artista => {
            var list=[];
            for (var i = 0; i < artista.length; i++) {
                var cadena = artista[i].nombre + " " + artista[i].apellido;
                list.push(cadena);
            }
            res.send(list);
        }).catch(function (error) {
            res.send(res, error);
        });
    },

    
}
