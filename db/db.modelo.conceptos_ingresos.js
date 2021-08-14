const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Ingresos

const Conceptos_Ingresos = sequelize.define ('Conceptos_Ingresos',{
    concepto_ingreso:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps: true
});

module.exports = Conceptos_Ingresos