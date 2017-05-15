var _ = require('../node_modules/underscore');
var clienteBusiness = require('../business/ClienteBusiness.js');


exports.Index = function(req, res) {
	res.pageInfo = {};
	res.pageInfo.title = 'Hello World';
	res.render('home/Index', res.pageInfo);
};

exports.GetClienteById = function(req, res) {
	var clienteId = parseInt(req.params.id, 10);
	clienteBusiness.GetClienteById(clienteId).then(function(cliente) {
		res.json(cliente);
	}).catch((err) => setImmediate(() => { throw err; }))
};

exports.CreateCliente = function(req, res) {

	var cliente = {};
	cliente.rut = req.body.data.rut;
	cliente.giro = req.body.data.giro;
	cliente.razon_social = req.body.data.razon_social;

	var _obj = clienteBusiness.CreateCliente(cliente);
	res.json(_obj._boundTo.dataValues);
};