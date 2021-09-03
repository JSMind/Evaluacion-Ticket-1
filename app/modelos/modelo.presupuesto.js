const sequelize = require('../../db/db.conection');

class ModelosPresupuestos {

    obtenerIngresos = async(idPresupuesto) => {         
        try {

            const resultado = await sequelize.query(`SELECT  Ingresos.id AS id_ingreso,Ingresos.ingreso, Conceptos_Ingresos.concepto_nombre, Periodos.periodo, Ingresos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Ingresos.id_usuario, Usuarios.nombres
            FROM Ingresos INNER JOIN Conceptos_Ingresos ON id_concepto_ingreso = Conceptos_Ingresos.id
                        INNER JOIN Periodos ON id_periodo = Periodos.id
                        INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
                        INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
                        INNER JOIN Usuarios ON id_usuario = Usuarios.id
            WHERE id_presupuesto = ${idPresupuesto}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    obtenerCostosDirectos = async(idPresupuesto) => {
        try {
            const resultado = await sequelize.query(`SELECT  Costos_Directos.id AS id_costo_directo, Costos_Directos.costo_directo, Conceptos_Costos_Directos.concepto_nombre, Periodos.periodo, Costos_Directos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Costos_Directos.id_usuario, Usuarios.nombres
            FROM Costos_Directos INNER JOIN Conceptos_Costos_Directos ON id_concepto_costo_directo = Conceptos_Costos_Directos.id
                                INNER JOIN Periodos ON id_periodo= Periodos.id
                                INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
                                INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
                                INNER JOIN Usuarios ON id_usuario = Usuarios.id
            WHERE id_presupuesto = ${idPresupuesto}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    obtenerGastosAdministrativos = async(idPresupuesto) => {
        try {
            const resultado = await sequelize.query(`SELECT  Costos_Administrativos.id AS id_costo_administrativo,Costos_Administrativos.costo_administrativo, Conceptos_Costos_Administrativos.concepto_nombre, Periodos.periodo, Costos_Administrativos.id_presupuesto, Proyectos.proyecto_nombre, Presupuestos.version, Costos_Administrativos.id_usuario
            FROM Costos_Administrativos INNER JOIN Conceptos_Costos_Administrativos ON id_concepto_costo_administrativo = Conceptos_Costos_Administrativos.id
                                        INNER JOIN Periodos ON id_periodo = Periodos.id
                                        INNER JOIN Proyectos ON id_presupuesto = Proyectos.id
                                        INNER JOIN Presupuestos ON id_presupuesto = Presupuestos.id
                                        INNER JOIN Usuarios ON id_usuario = Usuarios.id
            WHERE id_presupuesto = ${idPresupuesto}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    nombreProyectoNuevo = async(nombre) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Proyectos(proyecto_nombre) 
                                                        VALUES ('${nombre}')`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    nuevoPresupuesto = async(nuevoPresupuesto) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Presupuestos(id_proyecto, version) 
                                                        VALUES (${nuevoPresupuesto.id_proyecto}, '${nuevoPresupuesto.version}')`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    ingresoNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Conceptos_Ingresos(numero_concepto, concepto_nombre)  
                                            VALUES (${nuevoConcepto.numero_concepto},'${nuevoConcepto.concepto_nombre}')`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    costosDirectosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Conceptos_Costos_Directos(numero_concepto, concepto_nombre)  
                                            VALUES (${nuevoConcepto.numero_concepto},'${nuevoConcepto.concepto_nombre}')`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    gastosAdministrativosNuevoConcepto = async(nuevoConcepto) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Conceptos_Costos_Administrativos(numero_concepto, concepto_nombre)  
                                            VALUES (${nuevoConcepto.numero_concepto},'${nuevoConcepto.concepto_nombre}')`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    nuevoIngreso = async(ingreso) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Ingresos(ingreso, id_concepto_ingreso, id_periodo, id_presupuesto, id_usuario) 
                                                        VALUES (${ingreso.ingreso},${ingreso.id_concepto_ingreso},${ingreso.id_periodo},${ingreso.id_presupuesto},${ingreso.id_usuario})`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    nuevoCostoDirecto = async(costoDirecto) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Costos_Directos(costo_directo, id_concepto_costo_directo, id_periodo, id_presupuesto, id_usuario) 
                                                        VALUES (${costoDirecto.costo_directo},${costoDirecto.id_concepto_costo_directo},${costoDirecto.id_periodo},${costoDirecto.id_presupuesto},${costoDirecto.id_usuario})`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    nuevoGastoAdministrativo = async(gastoAdminstrativo) => {
        try {
            const resultado = await sequelize.query(`INSERT INTO Costos_Administrativos(costo_administrativo,id_concepto_costo_administrativo,id_periodo,id_presupuesto,id_usuario) 
                                                    VALUES (${gastoAdminstrativo.costo_administrativo},${gastoAdminstrativo.id_concepto_costo_administrativo},${gastoAdminstrativo.id_periodo},${gastoAdminstrativo.id_presupuesto},${gastoAdminstrativo.id_usuario})`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    editarIngreso = async(ingresoEditado) => {
        try {
            const resultado = await sequelize.query(`UPDATE Ingresos
                                                    SET ingreso = ${ingresoEditado.ingreso}
                                                    WHERE id =${ingresoEditado.id_ingreso}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    editarCostoDirecto= async(costoDirectoEditado) => {
        try {
            const resultado = await sequelize.query(`UPDATE Costos_Directos
                                                        SET costo_directo = ${costoDirectoEditado.costo_directo}
                                                        WHERE id =${costoDirectoEditado.id_costo_directo}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }

    editarGastoAdministrativo= async(gastoAdminstrativoEditado) => {
        try {
            const resultado = await sequelize.query(`UPDATE Costos_Administrativos
                                                        SET costo_administrativo = ${gastoAdminstrativoEditado.costo_administrativo}
                                                        WHERE id =${gastoAdminstrativoEditado.id_costo_administrativo}`);
            return resultado;
        } catch (error) {
            console.log('Error desde el modelo' + error)
            throw new Error(error)
        }
    }
}

module.exports = ModelosPresupuestos