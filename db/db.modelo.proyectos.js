const {DataTypes, Model} = require ('sequelize')
const sequelize = require ('./db.conection')

//Datos que contendra la tabla Proyectos

const Proyectos = sequelize.define ('Proyectos',{
    proyecto_nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps: true
});


module.exports = Proyectos