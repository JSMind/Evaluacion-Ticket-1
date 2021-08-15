const modeloIngresos = require('../modelos/modelo.ingresos.js');

module.exports.ingresos = async() => {
    try {
        let resultados = {}
        let periodos = await modeloIngresos.obtenerPorPeriodo();

        let conceptos = await modeloIngresos.obtenerPorConcepto();
        resultados = { periodos, conceptos }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador Ingresos' + " " + error)
        throw new Error(error)
    }
}