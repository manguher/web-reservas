module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cliente', {
		rut: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 17]
			}
		},
		giro: {
			type: DataTypes.STRING,
			allowNull: true
		},
		razon_social: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});
};