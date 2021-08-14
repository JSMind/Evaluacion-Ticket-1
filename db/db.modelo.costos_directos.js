const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Costos_Directos = require('./db.modelo.conceptos_costos_directos')

//Datos que contendra la tabla Costos_Directos

const Costos_Directos = sequelize.define ('Costos_Directos',{
    id_concepto_costo_directo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costo_directo_monto:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
},{
    timestamps: true
});
Costos_Directos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Costos_Directos.belongsTo(Conceptos_Costos_Directos, {foreignKey: 'id_concepto_costo_directo'});


module.exports = Costos_Directos