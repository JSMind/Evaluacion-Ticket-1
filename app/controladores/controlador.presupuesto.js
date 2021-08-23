const modeloPresupuesto = require('../modelos/modelo.presupuesto');

module.exports.ingresos = async(id_presupuesto) => {
    try {
        let resultados = {}
        let ingresos = await modeloPresupuesto.obtenerIngresos(id_presupuesto);
        resultados = { ingresos }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador Ingresos' + " " + error)
        throw new Error(error)
    }
}

module.exports.costosdirectos = async(id_presupuesto) => {
    try {
        let resultados = {}
        let costosdirectos = await modeloPresupuesto.obtenerCostos_Directos(id_presupuesto);
        resultados = { costosdirectos }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador Costos Directos' + " " + error)
        throw new Error(error)
    }
}



module.exports.gastosadministrativos = async(id_presupuesto) => {
    try {
        let resultados = {}
        let gastosadministrativos = await modeloPresupuesto.obtenerGastos_Administrativos(id_presupuesto);
        resultados = { gastosadministrativos }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador Costos Administrativos' + " " + error)
        throw new Error(error)
    }
}

module.exports.nombreproyectonuevo = async(nombre) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.nombreproyectonuevo(nombre);
        resultados = {message:"Exito en crear el nombre de proyecto" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nombreproyectonuevo' + " " + error)
        throw new Error(error)
    }
}

module.exports.nuevopresupuesto = async(nuevopresupuesto) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.nuevopresupuesto(nuevopresupuesto);
        resultados = {message:"Exito en crear el nuevo presupuesto" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}

module.exports.ingresonuevoconcepto = async(nuevoconcepto) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.ingresonuevoconcepto(nuevoconcepto);
        resultados = {message:"Exito en crear el nuevo concepto en ingresos" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}

module.exports.costosdirectosnuevoconcepto= async(nuevoconcepto) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.costosdirectosnuevoconcepto(nuevoconcepto);
        resultados = {message:"Exito en crear el nuevo concepto en costos directos" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}

module.exports.gastosadministrativosnuevoconcepto = async(nuevoconcepto) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.gastosadministrativosnuevoconcepto(nuevoconcepto);
        resultados = {message:"Exito en crear el nuevo concepto en gastos administrativos" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.nuevoingreso = async(ingreso) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.nuevoingreso(ingreso);
        resultados = {message:"Exito en crear el nuevo ingreso" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.nuevocostodirecto = async(costodirecto) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.nuevocostodirecto(costodirecto);
        resultados = {message:"Exito en crear el nuevo costo directo" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.nuevogastoadministrativo = async(gastoadminstrativo) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.nuevogastoadministrativo(gastoadminstrativo);
        resultados = {message:"Exito en crear el nuevo gasto administrativo" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.editaringreso= async(ingresoeditado) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.editaringreso(ingresoeditado);
        resultados = {message:"Exito en editar el ingreso" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.editarcostodirecto = async(costodirectoeditado) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.editarcostodirecto(costodirectoeditado);
        resultados = {message:"Exito en editar el costo directo" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}


module.exports.editargastoadministrativo = async(gastoadminstrativoeditado) => {
    try {
        let resultados = {}
        let resultado = await modeloPresupuesto.editargastoadministrativo(gastoadminstrativoeditado);
        resultados = {message:"Exito en editar el gasto administrativo" }

        return resultados

    } catch (error) {
        console.log('Error desde el controlador nuevopresupuesto' + " " + error)
        throw new Error(error)
    }
}