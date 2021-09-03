const modelosPresupuestos = require('../modelos/modelo.presupuesto');
const  modelo2 = new modelosPresupuestos();

class ControladorPresupuesto {

    ingresos = async(idPresupuesto) => {
        try {

            const resultados = await modelo2.obtenerIngresos(idPresupuesto);
            
            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Ingresos' + " " + error)
            throw new Error(error)
        }
    }

    costosDirectos = async(idPresupuesto) => {
        try {
            
            const resultados = await modelo2.obtenerCostosDirectos(idPresupuesto);

            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Costos Directos' + " " + error)
            throw new Error(error)
        }
    }

    gastosAdministrativos = async(idPresupuesto) => {
        try {
            
            const resultados = await modelo2.obtenerGastosAdministrativos(idPresupuesto);

            return resultados[0]

        } catch (error) {
            console.log('Error desde el controlador Costos Administrativos' + " " + error)
            throw new Error(error)
        }
    }

    nombreProyectonuevo = async(nombre) => {
        try {
            const resultados = await modelo2.nombreProyectoNuevo(nombre);
            
            return resultados

        } catch (error) {
            console.log('Error desde el controlador nombreproyectonuevo' + " " + error)
            throw new Error(error)
        }
    }

    nuevoPresupuesto = async(nuevoPresupuesto) => {
        try {
            
            const resultados = await modelo2.nuevoPresupuesto(nuevoPresupuesto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    ingresoNuevoConcepto = async(nuevoConcepto) => {
        try {
            
            const resultados = await modelo2.ingresoNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    costosDirectosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultados = await modelo2.costosDirectosNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    gastosAdministrativosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultados = await modelo2.gastosAdministrativosNuevoConcepto(nuevoConcepto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoIngreso = async(ingreso) => {
        try {
            const resultados = await modelo2.nuevoIngreso(ingreso);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoCostoDirecto = async(costoDirecto) => {
        try {
            const resultados = await modelo2.nuevoCostoDirecto(costoDirecto);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    nuevoGastoAdministrativo = async(gastoAdminstrativo) => {
        try {
            const resultados = await modelo2.nuevoGastoAdministrativo(gastoAdminstrativo);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarIngreso = async(ingresoEditado) => {
        try {
            const resultados = await modelo2.editarIngreso(ingresoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarCostoDirecto = async(costoDirectoEditado) => {
        try {
            const resultados = await modelo2.editarCostoDirecto(costoDirectoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }

    editarGastoAdministrativo = async(gastoAdminstrativoEditado) => {
        try {
            const resultados = await modelo2.editarGastoAdministrativo(gastoAdminstrativoEditado);

            return resultados

        } catch (error) {
            console.log('Error desde el controlador nuevopresupuesto' + " " + error)
            throw new Error(error)
        }
    }
}

module.exports = ControladorPresupuesto 