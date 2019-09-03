const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:admin@cluster0-na4sl.mongodb.net";
const dbName = 'galeriadaw';
var db;

const client = new MongoClient(url,{ useNewUrlParser: true });
client.connect(function(err) {
    console.log("Connected successfully to server");
     db = client.db(dbName);
    });

module.exports = {
    find(req, res) {
        var cuadros=db.collection('cuadros');
        cuadros.find({Artista:req.params.idArtista}).toArray((err, items) => {
            res.send(items);
         })
       
    },
}

