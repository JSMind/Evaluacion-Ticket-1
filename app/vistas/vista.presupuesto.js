const controladorIngresos = require('../controladores/controlador.ingresos')


module.exports = async(app) => {
    app.get('/ingresos', async(req, res) => {
        try {
            const resultados = await controladorIngresos.ingresos()
            res.send(resultados);
        } catch (error) {
            res.status(500).json('Error al cargar la página')
        }
    })

}