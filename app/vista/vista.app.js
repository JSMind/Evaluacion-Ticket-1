// Importación de modulos necesarios a utilizar

// Exportar los modulos
module.exports = (app) => {

    app.get('/home', async(req,res) => {                            //Vista que renderiza la pagina Home
        try { 
            res.render('fechas')  
        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/login', async(req,res) => {                            //Vista que renderiza la pagina Home
        try { 
            res.render('login')  
        } catch (error) {
            console.log('Error al renderizar la pagina login');
            res.status(400).json(error.message);
        }
    });
}