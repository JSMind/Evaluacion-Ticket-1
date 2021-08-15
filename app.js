//Importacion de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db/db.conection')
const Recursos_Role = require('./db/db.modelo.recursos_role')
const Conceptos_Ingresos = require('./db/db.modelo.conceptos_ingresos')
const Conceptos_Costos_Administrativos = require('./db/db.modelo.conceptos_costos_administrativos')
const Conceptos_Costos_Directos = require('./db/db.modelo.conceptos_costos_directos')
const Porcentajes_Recursos = require('./db/db.modelo.porcentajes_recursos')
const Costos_Administrativos = require('./db/db.modelo.costos_administrativos')
const Costos_Directos = require('./db/db.modelo.costos_directos')
const Periodos = require('./db/db.modelo.periodos')
const Ingresos = require('./db/db.modelo.ingresos')
const Proyectos = require('./db/db.modelo.proyectos')
const Presupuestos = require('./db/db.modelo.presupuestos');

const vistaApp = require('./app/vistas/vista.app')
const vistaIngresos = require('./app/vistas/vista.ingresos')


//Middlewares Globales
app.use(express.json())
app.use(cors())

//Configuraciones Globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//Inicializamos el Servidor 
async function iniciarServidor() {
    try {
        await Recursos_Role.sync({ alter: true });
        await Conceptos_Costos_Administrativos.sync({ alter: true });
        await Conceptos_Costos_Directos.sync({ alter: true });
        await Conceptos_Ingresos.sync({ alter: true });
        await Periodos.sync({ alter: true });
        await Porcentajes_Recursos.sync({ alter: true });
        await Costos_Administrativos.sync({ alter: true });
        await Costos_Directos.sync({ alter: true });
        await Ingresos.sync({ alter: true });
        await Proyectos.sync({ alter: true });
        await Presupuestos.sync({ alter: true });
        await sequelize.authenticate();
        console.log('Se establecio una conexion exitosa con la base de datos');
        app.listen(process.env.PORT, () => {
            console.log(`El servidor se ha iniciado correctamente en : ${process.env.HOST}:${process.env.PORT}`)
        });

    } catch (error) {
        console.log(`No se conecto con la base de datos: ${error}`);

    }
}
iniciarServidor();



//Inicializar las vistas
vistaApp(app);
vistaIngresos(app);