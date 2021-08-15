const { DataTypes, Model } = require('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Costos_Administrativos = require('./db.modelo.conceptos_costos_administrativos')

//Datos que contendra la tabla Costos_Administrativos

const Costos_Administrativos = sequelize.define('Costos_Administrativos', {
    id_concepto_costo_administrativo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costo_administrativo_monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    timestamps: true
});
Costos_Administrativos.belongsTo(Periodos, { foreignKey: 'id_periodo' });
Costos_Administrativos.belongsTo(Conceptos_Costos_Administrativos, { foreignKey: 'id_concepto_costo_administrativo' });


module.exports = Costos_Administrativos