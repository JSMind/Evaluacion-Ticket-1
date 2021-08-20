//const Ingresos = require('../../db/db.modelo.ingresos');
const sequelize = require('../../db/db.conection')
module.exports.obtenerPorPeriodo = async() => {
    try {
        let resultado = await sequelize.query(`SELECT
        Conceptos_Ingresos.concepto_nombre,
        Periodos.periodo,
        Ingresos.ingreso
    FROM
        Periodos
        INNER JOIN Ingresos ON Periodos.id = Ingresos.id_periodo
        INNER JOIN Conceptos_Ingresos ON Ingresos.id_concepto_ingreso = Conceptos_Ingresos.id`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}
module.exports.obtenerPorConcepto = async() => {
    try {
        let resultado = await sequelize.query(`SELECT
        Periodos.periodo, 
        Ingresos.ingreso
    FROM
        Conceptos_Ingresos
        INNER JOIN
        Ingresos
        ON 
            Conceptos_Ingresos.id = Ingresos.id_concepto_ingreso
        INNER JOIN
        Periodos
        ON 
            Ingresos.id_periodo = Periodos.id
    `);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}