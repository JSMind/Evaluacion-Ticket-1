const controladorPresupuesto = require('../controladores/controlador.presupuesto')

module.exports =  (app) => {

    app.get('/ingresos/:id_presupuesto', async(req, res) => {                       //Endpoint para traer el objeto ingresos por id de presupuesto
        try {
            id_presupuesto= req.params.id_presupuesto
            const resultados = await controladorPresupuesto.ingresos(id_presupuesto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })


    app.get('/costosdirectos/:id_presupuesto', async(req, res) => {                 //Endpoint para traer el objeto de los costosdirectos por id de presupuesto
        try {
            id_presupuesto= req.params.id_presupuesto
            const resultados = await controladorPresupuesto.costosdirectos(id_presupuesto)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })




    app.get('/gastosadministrativos/:id_presupuesto', async(req, res) => {          //Endpoint para traer el objeto gastosadministrativos por id de presupuesto
        try {
            id_presupuesto= req.params.id_presupuesto
            const resultados = await controladorPresupuesto.gastosadministrativos(id_presupuesto)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    
    app.post('/nuevoproyecto/:nombreproyectonuevo', async(req, res) => {            //Endpoint para crear un nuevo proyecto
        try {
            nombre= req.params.nombreproyectonuevo
            const resultados = await controladorPresupuesto.nombreproyectonuevo(nombre)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/nuevopresupuesto', async(req, res) => {                              //Endpoint para crear un nuevo presupuesto
        try {
            nuevopresupuesto= req.body
            const resultados = await controladorPresupuesto.nuevopresupuesto(nuevopresupuesto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/ingresos/nuevoconcepto', async(req, res) => {                        //Endpoint para crear un nuevo concepto de ingreso
        try {
            nuevoconcepto= req.body
            const resultados = await controladorPresupuesto.ingresonuevoconcepto(nuevoconcepto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })
    
    app.post('/costosdirectos/nuevoconcepto', async(req, res) => {                //Endpoint para crear un nuevo concepto de costos directos
        try {
            nuevoconcepto= req.body
            const resultados = await controladorPresupuesto.costosdirectosnuevoconcepto(nuevoconcepto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    
    app.post('/gastosadministrativos/nuevoconcepto', async(req, res) => {         //Endpoint para crear un nuevo concepto de gastos administrativos
        try {
            nuevoconcepto= req.body
            const resultados = await controladorPresupuesto.gastosadministrativosconcepto(nuevoconcepto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/ingresos/nuevoingreso', async(req, res) => {                         //Endpoint para crear un nuevo ingreso
        try {
            ingreso= req.body
            const resultados = await controladorPresupuesto.nuevoingreso(ingreso)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/costosdirectos/nuevocostodirecto', async(req, res) => {              //Endpoint para crear un nuevo costo directo
        try {
            costodirecto= req.body
            const resultados = await controladorPresupuesto.nuevocostodirecto(costodirecto)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/gastosadministrativos/nuevogastoadministrativo', async(req, res) => {  //Endpoint para crear un nuevo gasto administrativo
        try {
            gastoadminstrativo= req.body
            const resultados = await controladorPresupuesto.nuevogastoadministrativo(gastoadminstrativo)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/ingresos/editaringreso', async(req, res) => {                            //Endpoint para crear un nuevo gasto administrativo
        try {
            ingresoeditado= req.body
            const resultados = await controladorPresupuesto.editaringreso(ingresoeditado)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/costosdirectos/editarcostodirecto', async(req, res) => {                 //Endpoint para crear un nuevo gasto administrativo
        try {
            costodirectoeditado= req.body
            const resultados = await controladorPresupuesto.editarcostodirecto(costodirectoeditado)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

    app.post('/gastosadministrativos/editargastoadministrativo', async(req, res) => {     //Endpoint para crear un nuevo gasto administrativo
        try {
            gastoadminstrativoeditado= req.body
            const resultados = await controladorPresupuesto.editargastoadministrativo(gastoadminstrativoeditado)
            console.log(resultados)
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

}