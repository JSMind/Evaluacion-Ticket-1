const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Conceptos_Costos_Administrativos

const Conceptos_Costos_Administrativos = sequelize.define ('Conceptos_Costos_Administrativos',{
    numero_concepto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    concepto_nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    }   
},{
    timestamps: true
});

module.exports = Conceptos_Costos_Administrativos