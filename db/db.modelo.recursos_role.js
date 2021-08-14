const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')


//Datos que contendra la tabla Recursos_Rol

const Recursos_Role = sequelize.define ('Recursos_Role',{
    tipo_role:{
        type: DataTypes.CHAR(70),
        allowNull: false
    },
    recurso_monto:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
    },{
    timestamps: true

});

module.exports = Recursos_Role


