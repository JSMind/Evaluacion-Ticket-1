const sequelize = require('../../db/db.conection');
const { costosdirectos } = require('../controladores/controlador.presupuesto');
module.exports.obtenerIngresos = async(id_presupuesto) => {        //Metodo que realiza la consulta en la base de datos para obtener los ingresos 
    try {
        let resultado = await sequelize.query(`SELECT  Ingresos.id AS id_ingreso,Ingresos.ingreso, Conceptos_Ingresos.concepto_nombre, Periodos.periodo, Ingresos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Ingresos.id_usuario, Usuarios.nombres
		FROM Ingresos INNER JOIN Conceptos_Ingresos ON id_concepto_ingreso = Conceptos_Ingresos.id
					  INNER JOIN Periodos ON id_periodo = Periodos.id
					  INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
					  INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
					  INNER JOIN Usuarios ON id_usuario = Usuarios.id
		WHERE id_presupuesto = ${id_presupuesto}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}
module.exports.obtenerCostos_Directos = async(id_presupuesto) => {
    try {
        let resultado = await sequelize.query(`SELECT  Costos_Directos.id AS id_costo_directo, Costos_Directos.costo_directo, Conceptos_Costos_Directos.concepto_nombre, Periodos.periodo, Costos_Directos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Costos_Directos.id_usuario, Usuarios.nombres
		FROM Costos_Directos INNER JOIN Conceptos_Costos_Directos ON id_concepto_costo_directo = Conceptos_Costos_Directos.id
							 INNER JOIN Periodos ON id_periodo= Periodos.id
							 INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
							 INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
							 INNER JOIN Usuarios ON id_usuario = Usuarios.id
		WHERE id_presupuesto = ${id_presupuesto}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.obtenerGastos_Administrativos = async(id_presupuesto) => {
    try {
        let resultado = await sequelize.query(`SELECT  Costos_Administrativos.id AS id_costo_administrativo,Costos_Administrativos.costo_administrativo, Conceptos_Costos_Administrativos.concepto_nombre, Periodos.periodo, Costos_Administrativos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Costos_Administrativos.id_usuario
		FROM Costos_Administrativos INNER JOIN Conceptos_Costos_Administrativos ON id_concepto_costo_administrativo = Conceptos_Costos_Administrativos.id
									INNER JOIN Periodos ON id_periodo = Periodos.id
									INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
									INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
									INNER JOIN Usuarios ON id_usuario = Usuarios.id
		WHERE id_presupuesto = ${id_presupuesto}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}


module.exports.nombreproyectonuevo = async(nombre) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Proyectos(proyecto_nombre) 
                                                    VALUES ('${nombre}')`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.nuevopresupuesto= async(nuevopresupuesto) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Presupuestos(id_proyecto, version) 
                                                    VALUES (${nuevopresupuesto.id_proyecto}, '${nuevopresupuesto.version}')`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.ingresonuevoconcepto= async(nuevoconcepto) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Conceptos_Ingresos(numero_concepto, concepto_nombre)  
                                        VALUES (${nuevoconcepto.numero_concepto},'${nuevoconcepto.concepto_nombre}')`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}
module.exports.costosdirectosnuevoconcepto= async(nuevoconcepto) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Conceptos_Costos_Directos(numero_concepto, concepto_nombre)  
                                        VALUES (${nuevoconcepto.numero_concepto},'${nuevoconcepto.concepto_nombre}')`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}
module.exports.gastosadministrativosnuevoconcepto= async(nuevoconcepto) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Conceptos_Costos_Administrativos(numero_concepto, concepto_nombre)  
                                        VALUES (${nuevoconcepto.numero_concepto},'${nuevoconcepto.concepto_nombre}')`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.nuevoingreso= async(ingreso) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Ingresos(ingreso, id_concepto_ingreso, id_periodo, id_presupuesto, id_usuario) 
                                                    VALUES (${ingreso.ingreso},${ingreso.id_concepto_ingreso},${ingreso.id_periodo},${ingreso.id_presupuesto},${ingreso.id_usuario})`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.nuevocostodirecto= async(costodirecto) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Costos_Directos(costo_directo, id_concepto_costo_directo, id_periodo, id_presupuesto, id_usuario) 
                                                     VALUES (${costodirecto.costo_directo},${costodirecto.id_concepto_costo_directo},${costodirecto.id_periodo},${costodirecto.id_presupuesto},${costodirecto.id_usuario})`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.nuevogastoadministrativo= async(gastoadministrativo) => {
    try {
        let resultado = await sequelize.query(`INSERT INTO Costos_Administrativos(costo_administrativo,id_concepto_costo_administrativo,id_periodo,id_presupuesto,id_usuario) 
                                                VALUES (${gastoadministrativo.costo_administrativo},${gastoadministrativo.id_concepto_costo_administrativo},${gastoadministrativo.id_periodo},${gastoadministrativo.id_presupuesto},${gastoadministrativo.id_usuario})`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.editaringreso= async(ingresoeditado) => {
    try {
        let resultado = await sequelize.query(`UPDATE Ingresos
                                                SET ingreso = ${ingresoeditado.ingreso}
                                                WHERE id =${ingresoeditado.id_ingreso}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.editarcostodirecto= async(costodirectoeditado) => {
    try {
        let resultado = await sequelize.query(`UPDATE Costos_Directos
                                                    SET costo_directo = ${costodirectoeditado.costo_directo}
                                                     WHERE id =${costodirectoeditado.id_costo_directo}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}

module.exports.editargastoadministrativo= async(gastoadminstrativoeditado) => {
    try {
        let resultado = await sequelize.query(`UPDATE Costos_Administrativos
                                                    SET costo_administrativo = ${gastoadminstrativoeditado.costo_administrativo}
                                                    WHERE id =${gastoadminstrativoeditado.id_costo_administrativo}`);
        return resultado;
    } catch (error) {
        console.log('Error desde el modelo' + error)
        throw new Error(error)
    }
}