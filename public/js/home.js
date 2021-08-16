function aregarColumnasFlujoEfectivo(th){
    document.querySelectorAll('.flujoefectivo')[0].insertBefore(th, document.querySelectorAll('.sumatotal')[0]);
        for( let i=0; i<4; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.flujoefectivo')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma')[i]) 
        }
}


function aregarColumnasEstadoResultados(th1){

    document.querySelectorAll('.estadoresultados')[0].insertBefore(th1, document.querySelectorAll('.sumatotal')[1]);  
        for( let i=0; i<4; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.estadoresultados')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma1')[i]) 
        }
}

function aregarColumnasIngresos(th2){
    document.querySelectorAll('.ingresos')[0].insertBefore(th2, document.querySelectorAll('.sumatotal')[2]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.ingresos')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma2')[i]) 
        }
}


function agregarPeriodo(aux) {
   
    let th = document.createElement('th')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')

    const tabla1 = document.querySelector('.tabla1')

    if(aux){
        // año = prompt("ESCRIBA EL AÑO ACTUAL: ")
        mes = prompt("ESCRIBA EL MES EN QUE DESEA INICIAR: ")     
        th.textContent = mes
        th1.textContent = mes
        th2.textContent = mes


        aregarColumnasFlujoEfectivo(th)
        aregarColumnasEstadoResultados(th1)
        aregarColumnasIngresos(th2)
         
        let nuevafila = tabla1.insertRow(-1)
        let nuevo = nuevafila.insertCell(0)
        nuevo.textContent = "Hola!!"
            
    } else { 
        fecha= ["ENERO","FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ]
        indice = fecha.indexOf(`${mes}`)

        th.textContent = fecha[indice+i]
        th1.textContent = fecha[indice+i]
        th2.textContent = fecha[indice+i]

        
        aregarColumnasFlujoEfectivo(th)
        aregarColumnasEstadoResultados(th1)
        aregarColumnasIngresos(th2)     
     
        i++ 

    }
}

let i=1
let año
let mes
let aux = true

const agregarperiodo = document.getElementById('agregarperiodo')
agregarperiodo.addEventListener('click', ()=> {                 //Detectamos el evento de agregar PERIOO
     
    agregarPeriodo(aux)
    aux = false

})




// async function Ingresos() {
//     let datos = await fetch(`http://localhost:3000/ingresos`, {
//         method: 'get',
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             'Content-Type': 'application/json',
//             //'Authorization': `Bearer ${usuario.token}`
//         }
//     });
//     let ingresos = await datos.json()
//     return ingresos;
// }

// Ingresos()