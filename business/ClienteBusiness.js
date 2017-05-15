var _ = require('../node_modules/underscore');
var bodyParser = require('../node_modules/body-parser');
var db = require('../db.js');


exports.CreateCliente = function(cliente) {
	return db.cliente.create(cliente).then(function(obj) {
		return obj;
	},
	function(e) {
		return e;
	});


};

exports.GetClienteById = function(clienteId) {
	return new Promise(function(resolve, reject) {
		db.cliente.findById(clienteId).then(function(cliente) {
			if (!!cliente) {
				var _cliente = cliente.get({
					plain: true
				});
				resolve(_cliente);
			}
		}, function(e){
			reject(e);
		});
	});
};