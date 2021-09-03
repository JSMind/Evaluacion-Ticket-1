const modelosPresupuestos = require('../modelos/modelo.presupuesto');
const  modelo = new modelosPresupuestos();

class ControladorPresupuesto {

    ingresos = async(idPresupuesto) => {
        try {

            const resultados = await modelo.obtenerIngresos(idPresupuesto);
            
            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Ingresos' + " " + error)
            throw new Error(error)
        }
    }

    costosDirectos = async(idPresupuesto) => {
        try {
            
            const resultados = await modelo.obtenerCostosDirectos(idPresupuesto);

            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Costos Directos' + " " + error)
            throw new Error(error)
        }
    }

    gastosAdministrativos = async(idPresupuesto) => {
        try {
            
            const resultados = await modelo.obtenerGastosAdministrativos(idPresupuesto);

            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Costos Administrativos' + " " + error)
            throw new Error(error)
        }
    }

    nombreProyectonuevo = async(nombre) => {
        try {
            const resultados = await modelo.nombreProyectoNuevo(nombre);
            
            return resultados

        } catch (error) {
            console.log('Error desde el controlador nombreproyectonuevo' + " " + error)
            throw new Error(error)
        }
    }

    nuevoPresupuesto = async(nuevoPresupuesto) => {
        try {
            
            const resultados = await modelo.nuevoPresupuesto(nuevoPresupuesto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    ingresoNuevoConcepto = async(nuevoConcepto) => {
        try {
            
            const resultados = await modelo.ingresoNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    costosDirectosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultados = await modelo.costosDirectosNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    gastosAdministrativosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultados = await modelo.gastosAdministrativosNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoIngreso = async(ingreso) => {
        try {
            const resultados = await modelo.nuevoIngreso(ingreso);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoCostoDirecto = async(costoDirecto) => {
        try {
            const resultados = await modelo.nuevoCostoDirecto(costoDirecto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoGastoAdministrativo = async(gastoAdminstrativo) => {
        try {
            const resultados = await modelo.nuevoGastoAdministrativo(gastoAdminstrativo);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarIngreso = async(ingresoEditado) => {
        try {
            const resultados = await modelo.editarIngreso(ingresoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarCostoDirecto = async(costoDirectoEditado) => {
        try {
            const resultados = await modelo.editarCostoDirecto(costoDirectoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarGastoAdministrativo = async(gastoAdminstrativoEditado) => {
        try {
            const resultados = await modelo.editarGastoAdministrativo(gastoAdminstrativoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }
}

module.exports = ControladorPresupuesto 