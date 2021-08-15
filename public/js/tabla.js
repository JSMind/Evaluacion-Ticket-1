function agregarFila() {
    let x = document.getElementById('headTable2').getElementsByTagName('th').length;
    let columnas_periodos = x - 2;
    let obj = ['kevin', 'jahir', 'erick']
    console.log(columnas_periodos)

    // let fecha = document.getElementById('start').value
    // console.log(fecha)
    let fecha_pres = document.getElementsByName("trip-start")[0].value;

    let fecha_presN = new Date(fecha_pres)
    console.log(fecha_presN.setMonth(fecha_presN.getMonth() + 2))



    const columnas = document.getElementById('headTable')
    const columnasDataI = document.getElementById('bodyColINGRESOS')
    const columnasDataE = document.getElementById('bodyColEGRESOS')
    const columnasDataT = document.getElementById('bodyColTOTAL')
    const columnasDataTA = document.getElementById('bodyColTOTAL_ACUMULADO')

    const columnas2 = document.getElementById('headTable2')
    const columnasDataI2 = document.getElementById('bodyColINGRESOS2')
    const columnasDataE2 = document.getElementById('bodyColEGRESOS2')
    const columnasDataT2 = document.getElementById('bodyColTOTAL2')
    const columnasDataTA2 = document.getElementById('bodyColTOTAL_ACUMULADO2')





    const th = document.createElement('th')
    th.textContent = fecha_pres
    const tdI = document.createElement('td')
    tdI.textContent = obj[columnas_periodos]
    const tdE = document.createElement('td')
    tdE.textContent = "informacionE"
    const tdT = document.createElement('td')
    tdT.textContent = "informacionT"
    const tdTA = document.createElement('td')
    tdTA.textContent = "informacionTA"


    const th2 = document.createElement('th')
    th2.textContent = fecha_pres
    const tdI2 = document.createElement('td')
    tdI2.textContent = "informacionI"
    const tdE2 = document.createElement('td')
    tdE2.textContent = "informacionE"
    const tdT2 = document.createElement('td')
    tdT2.textContent = "informacionT"
    const tdTA2 = document.createElement('td')
    tdTA2.textContent = "informacionTA"


    columnas.insertBefore(th, document.getElementById('columFinal'));
    // columnasData.insertBefore(td, document.getElementById('.ultColumnSum'));

    columnasDataI.insertBefore(tdI, document.getElementById('ultColumnSumINGRESOS'))
    columnasDataE.insertBefore(tdE, document.getElementById('ultColumnSumEGRESOS'))
    columnasDataT.insertBefore(tdT, document.getElementById('ultColumnSumTOTAL'))
    columnasDataTA.insertBefore(tdTA, document.getElementById('ultColumnSumTOTAL_ACUMULADO'))
        // // document.insertBefore(th, columnas);
        // let product = document.getElementsByName("trip-start")[0].value;
        // console.log(product)

    columnas2.insertBefore(th2, document.getElementById('columFinal2'));
    // columnasData.insertBefore(td, document.getElementById('.ultColumnSum'));

    columnasDataI2.insertBefore(tdI2, document.getElementById('ultColumnSumINGRESOS2'))
    columnasDataE2.insertBefore(tdE2, document.getElementById('ultColumnSumEGRESOS2'))
    columnasDataT2.insertBefore(tdT2, document.getElementById('ultColumnSumTOTAL2'))
    columnasDataTA2.insertBefore(tdTA2, document.getElementById('ultColumnSumTOTAL_ACUMULADO2'))




    // const th=document.createElement('th')
    // th.textContent=fecha_pres
    // const tdI=document.createElement('td')
    // tdI.textContent="informacionI"
    // const tdE=document.createElement('td')
    // tdE.textContent="informacionE"
    // const tdT=document.createElement('td')
    // tdT.textContent="informacionT"
    // const tdTA=document.createElement('td')
    // tdTA.textContent="informacionTA"



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