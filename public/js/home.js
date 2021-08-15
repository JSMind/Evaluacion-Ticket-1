function agregarFila() {
    console.log("Hola")
    

    const columnas = document.getElementById('headTable')
    const columnasDataI = document.getElementById('bodyColINGRESOS')
    const columnasDataE = document.getElementById('bodyColEGRESOS')
    const columnasDataT = document.getElementById('bodyColTOTAL')
    const columnasDataTA = document.getElementById('bodyColTOTAL_ACUMULADO')



    const th = document.createElement('th')
    th.textContent = "fecha"
    const tdI = document.createElement('td')
    tdI.textContent ="informacionI"
    const tdE = document.createElement('td')
    tdE.textContent = "informacionE"
    const tdT = document.createElement('td')
    tdT.textContent = "informacionT"
    const tdTA = document.createElement('td')
    tdTA.textContent = "informacionTA"




    columnas.insertBefore(th, document.getElementById('columFinal'));
    // columnasData.insertBefore(td, document.getElementById('.ultColumnSum'));
    columnasDataI.insertBefore(tdI, document.getElementById('ultColumnSumINGRESOS'))
    columnasDataE.insertBefore(tdE, document.getElementById('ultColumnSumEGRESOS'))
    columnasDataT.insertBefore(tdT, document.getElementById('ultColumnSumTOTAL'))
    columnasDataTA.insertBefore(tdTA, document.getElementById('ultColumnSumTOTAL_ACUMULADO'))
        // // document.insertBefore(th, columnas);
        // let product = document.getElementsByName("trip-start")[0].value;
        // console.log(product)


}

async function Ingresos() {
    let datos = await fetch(`http://localhost:3000/ingresos`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${usuario.token}`
        }
    });
    let ingresos = await datos.json()
    return ingresos;
}

Ingresos()