const controladorPresupuesto = require('../controladores/controlador.presupuesto');
const  controlador = new controladorPresupuesto();
const middUsuarios = require('../../middelwares/midd.usuarios');

module.exports = async (app) => {
    //METODOS PARA OBTENER INGRESOS, COSTOS DIRECTOS Y GASTOS ADMINISTRATIVOS 
    app.get('/ObtenerIngresos/:idPresupuesto', middUsuarios.usuarioValido, async(req, res) => {                  
        try {
            const idPresupuesto = req.params.idPresupuesto
            const ingresos = await controlador.ingresos(idPresupuesto)
            
            res.status(200).json({message: 'Consulta de Ingresos Exitosa', ingresos});
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.get('/ObtenerCostosDirectos/:idPresupuesto', middUsuarios.usuarioValido, async(req, res) => {            
        try {
            const idPresupuesto = req.params.idPresupuesto
            const costosDirectos = await controlador.costosDirectos(idPresupuesto)
           
            res.status(200).json({message: 'Consulta de Costos Directos Exitosa', costosDirectos});
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.get('/ObternerGastosAdministrativos/:idPresupuesto', middUsuarios.usuarioValido, async(req, res) => {    
        try {
            const idPresupuesto = req.params.idPresupuesto
            const gastosAdministrativos = await controlador.gastosAdministrativos(idPresupuesto)
            
            res.status(200).json({message: 'Consulta de Gastos Administrativos Exitosa', gastosAdministrativos});
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    //METODO PARA CREAR UN NUEVO PROYECTO
    app.post('/NuevoProyecto/:nombreProyectoNuevo', middUsuarios.usuarioValido,  async(req, res) => {            
        try {
            const nombre = req.params.nombreProyectoNuevo
            const resultados = await controlador.nombreProyectoNuevo(nombre)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Proyecto Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    //METODO PARA CREAR UN NUEVO PRESUPUESTO
    app.post('/NuevoPresupuesto', middUsuarios.usuarioValido,  async(req, res) => {                              
        try {
            const nuevoPresupuesto = req.body
            const resultados = await controlador.nuevoPresupuesto(nuevoPresupuesto)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Presupuesto Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    //METODOS PARA CREAR NUEVOS CONCEPTOS PARA INGRESOS, COSTOS DIRECTOS Y GASTOS ADMINISTRATIVOS
    app.post('/Ingresos/NuevoConcepto', middUsuarios.usuarioValido,  async(req, res) => {                        
        try {
            const nuevoConcepto= req.body
            const resultados = await controlador.ingresoNuevoConcepto(nuevoConcepto)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Concepto de Ingresos Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    
    app.post('/CostosDirectos/NuevoConcepto', middUsuarios.usuarioValido,  async(req, res) => {                  
        try {
            const nuevoConcepto = req.body
            const resultados = await controlador.costosDirectosNuevoConcepto(nuevoConcepto)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Concepto de Costos Directos Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.post('/GastosAdministrativos/NuevoConcepto', middUsuarios.usuarioValido,  async(req, res) => {           
        try {
            const nuevoConcepto = req.body
            const resultados = await controlador.gastosAdministrativosNuevoConcepto(nuevoConcepto)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Concepto de Gastos Administrativos Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    //METODOS PARA CREAR NUEVOS INGRESOS, NUEVOS COSTOS DIRECTOS Y NUEVOS GASTOS ADMINISTRATIVOS
    app.post('/Ingresos/NuevoIngreso', middUsuarios.usuarioValido,  async(req, res) => {                         
        try {
            const ingreso = req.body
            const resultados = await controlador.nuevoIngreso(ingreso)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Ingreso Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.post('/CostosDirectos/NuevoCostoDirecto', middUsuarios.usuarioValido,  async(req, res) => {              
        try {
            const costoDirecto = req.body
            const resultados = await controlador.nuevoCostoDirecto(costoDirecto)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Costo Directo Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.post('/GastosAdministrativos/NuevoGastoAdministrativo', middUsuarios.usuarioValido,  async(req, res) => {
        try {
            const gastoAdminstrativo = req.body
            const resultados = await controlador.nuevoGastoAdministrativo(gastoAdminstrativo)
            console.log(resultados)
            res.status(200).json({message: 'Nuevo Gasto Adminitrativo Creado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })
    //METODOS PARA EDITAR UN INGRESO, UN COSTO DIRECTO, UN GASTO ADMINISTRATIVO
    app.post('/Ingresos/EditarIngreso', middUsuarios.usuarioValido,  async(req, res) => {                        
        try {
            const ingresoEditado = req.body
            const resultados = await controlador.editarIngreso(ingresoEditado)
            console.log(resultados)
            res.status(200).json({message: 'Ingreso Editado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.post('/CostosDirectos/EditarCostoDirecto', middUsuarios.usuarioValido,  async(req, res) => {             
        try {
            const costoDirectoEditado = req.body
            const resultados = await controlador.editarCostoDirecto(costoDirectoEditado)
            console.log(resultados)
            res.status(200).json({message: 'Costo Directo Editado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

    app.post('/GastosAdministrativos/EditarGastoAdministrativo', middUsuarios.usuarioValido,  async(req, res) => {
        try {
            const gastoAdminstrativoEditado = req.body
            const resultados = await controlador.editarGastoAdministrativo(gastoAdminstrativoEditado)
            console.log(resultados)
            res.status(200).json({message: 'Gasto Administrativo Editado Con Exito'})  
        } catch (error) {
            res.status(500).json({message: 'Ocurrio Un Error En El Servidor', error: error.message});
        }
    })

}