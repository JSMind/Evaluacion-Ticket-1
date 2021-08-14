const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Ingresos = require('./db.modelo.conceptos_ingresos')

//Datos que contendra la tabla Ingresos

const Ingresos = sequelize.define ('Ingresos',{
    id_concepto_ingreso:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ingresos_monto:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
},{
    timestamps: true
});
Ingresos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Ingresos.belongsTo(Conceptos_Ingresos, {foreignKey: 'id_concepto_ingreso'});


module.exports = Ingresos