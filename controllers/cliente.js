const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    getCliente(req, res, next) {
        
        
    }
}
