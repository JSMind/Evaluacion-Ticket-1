const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Conceptos_Costos_Directos

const Conceptos_Costos_Directos = sequelize.define ('Conceptos_Costos_Directos',{
    concepto_costo_directo:{
        type: DataTypes.CHAR(100),
        allowNull: false
    }  
},{
    timestamps: true
});

module.exports = Conceptos_Costos_Directos