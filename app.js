const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//  pour initialiser le bodyParser pour pouvoir faire des insertions json
app.use(bodyParser.json());

Voiture = require('./modele/telephone');


// connect to mongoose
mongoose.connect('mongodb://localhost/garde');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('Merci d\'utiliser svp /api/telephones');
});

app.listen(3000);
console.log('Serveur en Ă©coute sur le port 3000....');
/// *********    rubrique Téléphone  ********    //////
/////////////////// GET ALL Téléphones ///////////////////
app.get('/api/telephones',(req,res)=>{
	Telephone.getTelephones((err, telephones)=>{
			if(err){
				throw err;
			}
			res.json(telephones);
	});
});

/////////////////// GET telephone ///////////////////
app.get('/api/telephones/:_id',(req,res)=>{
	var id = req.params._id;
	Telephone.getTelephoneById(id,(err, telephone)=>{
			if(err){
				throw err;
			}
			res.json(telephone);
	});
});
