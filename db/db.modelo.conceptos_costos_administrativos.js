const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Conceptos_Costos_Administrativos

const Conceptos_Costos_Administrativos = sequelize.define ('Conceptos_Costos_Administrativos',{
    concepto_costo_administrativo:{
        type: DataTypes.CHAR(100),
        allowNull: false
    }  
},{
    timestamps: true
});

module.exports = Conceptos_Costos_Administrativos