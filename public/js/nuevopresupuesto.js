//Funciones que agregan Columnas a las tablas
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

function aregarColumnasCostosDirectos(th3){
    document.querySelectorAll('.costosdirectos')[0].insertBefore(th3, document.querySelectorAll('.sumatotal')[3]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.costosdirectos')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma3')[i]) 
        }
}

function aregarColumnasGastosAdministrativos(th4){
    document.querySelectorAll('.gastosadministrativos')[0].insertBefore(th4, document.querySelectorAll('.sumatotal')[4]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.gastosadministrativos')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma4')[i]) 
        }
}

function aregarColumnasRecursos(th5){
    document.querySelectorAll('.recursos')[0].insertBefore(th5, document.querySelectorAll('.sumatotal')[5]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.recursos')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma5')[i]) 
        }
}

function aregarColumnasCostos(th6){
    document.querySelectorAll('.costos')[0].insertBefore(th6, document.querySelectorAll('.sumatotal')[6]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.costos')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma6')[i]) 
        }
}

function aregarColumnasResumen(th7){
    document.querySelectorAll('.resumen')[0].insertBefore(th7, document.querySelectorAll('.sumatotal')[7]);
        for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
            let  celda = document.querySelectorAll('.resumen')[1].querySelectorAll('tr')[i]     
            celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma7')[i]) 
        }
}
//INGRESOS, COSTOS DIRECTOS, GASTOS ADMINISTRATIVOS, RECURSOS(% ASIGNACION)
const guardar= document.querySelector('.guardar')
    guardar.addEventListener('click', ()=>{
    let ingresos = [[600,700,800],[600,700,800]]
    ingresos.push([600,700,800])

    for(let i=0; i<ingresos.length; i++){
        for(let j=0; j<ingresos[0].length;j++){
            console.log(ingresos[i][j])
        }
    }

    conceptosingresos =[]
    periodosingresos =[]

    for(let i=0; i<ingresos.length;i++){
        conceptosingresos.push(`Concepto${i}`)
        console.log(conceptosingresos[i])
    }

    for(let j=0; j<ingresos[0].length;j++){
        periodosingresos.push(`Periodo${j}`)
        console.log(periodosingresos[j])

    }


})


//Evento que detecta el Cierre de Sesion
const cerrarsession = document.querySelector('.singoff')
cerrarsession.addEventListener('click', ()=>{
    localStorage.removeItem('token');   
})


//Funcion que agrega el Periodo a las tablas
function agregarPeriodo(aux) {
   
    let th = document.createElement('th')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3= document.createElement('th')
    let th4= document.createElement('th')
    let th5= document.createElement('th')
    let th6= document.createElement('th')
    let th7= document.createElement('th')



    if(aux){
        año = prompt("ESCRIBA EL AÑO ACTUAL: ")
        mes = prompt("ESCRIBA EL MES EN QUE DESEA INICIAR: ")     
        th.textContent = mes
        th1.textContent = mes
        th2.textContent = mes
        th3.textContent = mes
        th4.textContent = mes
        th5.textContent = mes
        th6.textContent = mes
        th7.textContent = mes

        aregarColumnasFlujoEfectivo(th)
        aregarColumnasEstadoResultados(th1)
        aregarColumnasIngresos(th2)
        aregarColumnasCostosDirectos(th3)
        aregarColumnasGastosAdministrativos(th4)
        aregarColumnasRecursos(th5)
        aregarColumnasCostos(th6)
        aregarColumnasResumen(th7)
         
        // let nuevafila = tabla1.insertRow(-1)
        // let nuevo = nuevafila.insertCell(0)
        // nuevo.textContent = "Hola!!"
            
    } else { 
        fecha = ["ENERO","FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ]
        indice = fecha.indexOf(`${mes}`)

        th.textContent = fecha[indice+i]
        th1.textContent = fecha[indice+i]
        th2.textContent = fecha[indice+i]
        th3.textContent = fecha[indice+i]
        th4.textContent = fecha[indice+i]
        th5.textContent = fecha[indice+i]
        th6.textContent = fecha[indice+i]
        th7.textContent = fecha[indice+i]
        
        aregarColumnasFlujoEfectivo(th)
        aregarColumnasEstadoResultados(th1)
        aregarColumnasIngresos(th2)
        aregarColumnasCostosDirectos(th3)
        aregarColumnasGastosAdministrativos(th4)  
        aregarColumnasRecursos(th5)
        aregarColumnasCostos(th6)
        aregarColumnasResumen(th7)
   
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




async function Ingresos() {                                         //Funcion que trae los ingresos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/ingresos/1`, {
        method: 'get',
    });

    let ingresos = await datos.json()
    console.log("Los Ingresos registrados en la base de datos ")
    console.log(ingresos)
    return ingresos;
}



async function Costos_Directos() {                                  //Funcion que trae los costos directos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/costosdirectos/1`, {
        method: 'get',
    });

    let costos = await datos.json()
    console.log("Los Costos Directos registrados en la base de datos ")
    console.log(costos)
    return costos;
}

async function Gastos_Administrativos() {                                      //Funcion que trae los gastos administrativos por id_presupuesto
    let datos = await fetch(`http://localhost:3000/gastosadministrativos/1`, {
        method: 'get',
    });

    let gastos = await datos.json()
    console.log("Los Gastos Administrativos registrados en la base de datos ")
    console.log(gastos)
    return gastos;
}


Ingresos()
Costos_Directos()
Gastos_Administrativos()


