const token = JSON.parse(localStorage.getItem('token'))

class PresupuestoCalls{
    ingresos = async() => {      
                                        //Funcion que trae los ingresos por id_presupuesto
        const datos = await fetch(`http://localhost:3000/ObtenerIngresos/1`, {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const ingresos = await datos.json()
        return ingresos;
    }

    costosDirectos = async() => {      
        const datos = await fetch(`http://localhost:3000/ObtenerCostosDirectos/1`, {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const costos = await datos.json()
        return costos;
    }

    gastosAdministrativos = async() => {      
        const datos = await fetch(`http://localhost:3000/ObternerGastosAdministrativos/1`, {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const gastos = await datos.json()
        return gastos;
    }
}    