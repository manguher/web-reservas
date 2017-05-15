var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize('reservas', 'root', '1234', {
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
	});
}

var db = {};

db.cliente = sequelize.import(__dirname + '/business/entities/Cliente.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;