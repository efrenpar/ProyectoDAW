const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/galeria', {
    dialect: 'postgres'
});

module.exports = {
    getOpinion(req,res){
        opiniones = sequelize.import('../models/opinion.js');
        opiniones.findAll({  where: { artista: req.params.artista}  }).then(opinion => {
            var list=[];
            for (var i = 0; i < opinion.length; i++) {
                
                list.push(opinion[i]);
				
            }
			console.log("no entramos");
            res.status(200).send(list);
        }).catch(function (error) {
            res.send(res, error);
        });
    },
    setOpinion(req,res){
        opiniones = sequelize.import('../models/opinion.js');
        createOpinion = sequelize.import('../models/opinion.js');
        opiniones.findAll().then(opinion => {
            createOpinion.create({
                id:opinion.length+1,
                contenido:req.body.contenido,
                artista: req.body.artista,
                cliente:req.body.cliente
            }).then(newOpinion => {
                res.end();
            })
        })
    },
    deleteOpinion(req,res){
        opiniones = sequelize.import('../models/opinion.js');
        opiniones.destroy({
            where:{
                id:req.params.id
            }
        }).then(opinion => {
            res.send({message: "opinion deleted successfully!"});
            res.end();
        })
    }
}
