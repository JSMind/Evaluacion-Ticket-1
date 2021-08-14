const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Proyectos = require('./db.modelo.proyectos')
const Ingresos = require('./db.modelo.ingresos')
const Costos_Directos = require('./db.modelo.costos_directos')
const Costos_Administrativos= require('./db.modelo.costos_administrativos')
const Porcentajes_Recursos = require ('./db.modelo.porcentajes_recursos')





//Datos que contendra la tabla Poryectos

const Presupuestos = sequelize.define ('Presupuestos',{
    id_proyecto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    version:{
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    id_ingreso:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_costo_directo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_costo_administrativo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_porcentaje_administrativo:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true
});

Presupuestos.belongsTo(Proyectos, {foreignKey: 'id_proyecto'});
Presupuestos.belongsTo(Ingresos, {foreignKey: 'id_ingreso'});
Presupuestos.belongsTo(Costos_Directos, {foreignKey: 'id_costo_directo'});
Presupuestos.belongsTo(Costos_Administrativos, {foreignKey: 'id_costo_administrativo'});
Presupuestos.belongsTo(Porcentajes_Recursos, {foreignKey: 'id_porcentaje_administrativo'});








module.exports = Presupuestos