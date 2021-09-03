const token = JSON.parse(localStorage.getItem('token'))

async function Ingresos() {      
                                       //Funcion que trae los ingresos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/ObtenerIngresos/1`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    let ingresos = await datos.json()
    console.log("Los Ingresos registrados en la base de datos ")
    console.log(ingresos)
    return ingresos;
}

async function Costos_Directos() {                                  //Funcion que trae los costos directos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/ObtenerCostosDirectos/1`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    let costos = await datos.json()
    console.log("Los Costos Directos registrados en la base de datos ")
    console.log(costos)
    return costos;
}

async function Gastos_Administrativos() {                                      //Funcion que trae los gastos administrativos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/ObternerGastosAdministrativos/1`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    let gastos = await datos.json()
    console.log("Los Gastos Administrativos registrados en la base de datos ")
    console.log(gastos)
    return gastos;
}