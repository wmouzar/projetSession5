const mongoose = require('mongoose');

// definition shema de Telephone

const telephoneSchema = mongoose.Schema({
	nTelephone:{
		type: String,
		required: true
	},
	typeTelephone: {
		type: String,
        required: true
	}
});

// pour rendre Telephone accessible de n'importe ou ailleurs
const Telephone = module.exports = mongoose.model('Telephone', telephoneSchema);

// get Telephones
module.exports.getTelephones = function(callback, limit){
	Telephone.find(callback).limit(limit);
}


// Get Telephone
module.exports.getTelephoneById = (id, callback) => {
	Telephone.findById(id, callback);
}
