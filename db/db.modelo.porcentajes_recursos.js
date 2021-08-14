const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Recursos_Rol = require('./db.modelo.recursos_role')

//Datos que contendra la tabla Porcentaje_Recursos

const Porcentajes_Recursos = sequelize.define ('Porcentajes_Recursos',{
    id_recurso_rol:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    porcentaje_monto:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
},{
    timestamps: true
});
Porcentajes_Recursos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Porcentajes_Recursos.belongsTo(Recursos_Rol, {foreignKey: 'id_recurso_rol'});


module.exports = Porcentajes_Recursos