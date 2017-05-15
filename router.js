var HomeController = require('./controllers/HomeController');
var ClienteController = require('./controllers/ClienteController');

// Routes
module.exports = function(app) {

	// Main Routes
	app.get('/', HomeController.Index);
	app.get('/other', HomeController.Other);

	// GET /clientes/:id
	app.get('/cliente/:id', ClienteController.GetClienteById);
	app.post('/cliente/create', ClienteController.CreateCliente);

};