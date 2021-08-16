function agregarRColumna() {
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


function agregarPeriodo(aux) {
   

    const columnaperiodo = document.querySelector('.agregarmes')
    const templatedatos = document.getElementById('templateefectivo')
    const columnadatos = document.getElementById('Flujoefectivo')
    const fragment = document.createDocumentFragment() 
    // const columnasDataI = document.getElementById('bodyColINGRESOS')
    // const columnasDataE = document.getElementById('bodyColEGRESOS')
    // const columnasDataT = document.getElementById('bodyColTOTAL')
    // const columnasDataTA = document.getElementById('bodyColTOTAL_ACUMULADO')
    const th = document.createElement('th')

    
    
    
    if(aux){
        // año = prompt("ESCRIBA EL AÑO ACTUAL: ")
        mes = prompt("ESCRIBA EL MES EN QUE DESEA INICIAR: ")     
        th.textContent = mes
        columnaperiodo.insertBefore(th, document.querySelector('.sumatotal')); 
        
        templatedatos.querySelector('tr').textContent = "HOLA!!"
        const clone = templatedatos.cloneNode(true)
        fragment.appendChild(clone)  
        columnadatos.appendChild(fragment)
        console.log("Hola")

    } else { 
        fecha= ["ENERO","FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ]
        indice = fecha.indexOf(`${mes}`)

        th.textContent = fecha[indice+i]
        columnaperiodo.insertBefore(th, document.querySelector('.sumatotal')); 
        columnadatos.appendChild(templatedatos) 
        i++ 
    }


    // const tdI = document.createElement('td')
    // tdI.textContent ="informacionI"
    // const tdE = document.createElement('td')
    // tdE.textContent = "informacionE"
    // const tdT = document.createElement('td')
    // tdT.textContent = "informacionT"
    // const tdTA = document.createElement('td')
    // tdTA.textContent = "informacionTA"




    // columnasData.insertBefore(td, document.getElementById('.ultColumnSum'));
    // columnasDataI.insertBefore(tdI, document.getElementById('ultColumnSumINGRESOS'))
    // columnasDataE.insertBefore(tdE, document.getElementById('ultColumnSumEGRESOS'))
    // columnasDataT.insertBefore(tdT, document.getElementById('ultColumnSumTOTAL'))
    // columnasDataTA.insertBefore(tdTA, document.getElementById('ultColumnSumTOTAL_ACUMULADO'))
    //     // // document.insertBefore(th, columnas);
        // let product = document.getElementsByName("trip-start")[0].value;
        // console.log(product)


}

let i=1
let año
let mes
let aux = true
const agregarperiodo = document.getElementById('agregarperiodo')
agregarperiodo.addEventListener('click', ()=> {
    
    agregarPeriodo(aux)
    aux = false

})




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