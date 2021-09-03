class AgregarColumnas {
    //METODOS QUE AGREGAN COLUMNAS A LAS TABLAS
    aregarColumnasFlujoEfectivo(th){
        document.querySelectorAll('.flujoefectivo')[0].insertBefore(th, document.querySelectorAll('.sumatotal')[0]);
            for( let i=0; i<4; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.flujoefectivo')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma')[i]) 
            }
    }

    aregarColumnasEstadoResultados(th1){

        document.querySelectorAll('.estadoresultados')[0].insertBefore(th1, document.querySelectorAll('.sumatotal')[1]);  
            for( let i=0; i<4; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.estadoresultados')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma1')[i]) 
            }
    }

    aregarColumnasIngresos(th2){
        document.querySelectorAll('.ingresos')[0].insertBefore(th2, document.querySelectorAll('.sumatotal')[2]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.ingresos')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma2')[i]) 
            }
    }

    aregarColumnasCostosDirectos(th3){
        document.querySelectorAll('.costosdirectos')[0].insertBefore(th3, document.querySelectorAll('.sumatotal')[3]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.costosdirectos')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma3')[i]) 
            }
    }

    aregarColumnasGastosAdministrativos(th4){
        document.querySelectorAll('.gastosadministrativos')[0].insertBefore(th4, document.querySelectorAll('.sumatotal')[4]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.gastosadministrativos')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma4')[i]) 
            }
    }

    aregarColumnasRecursos(th5){
        document.querySelectorAll('.recursos')[0].insertBefore(th5, document.querySelectorAll('.sumatotal')[5]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.recursos')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma5')[i]) 
            }
    }

    aregarColumnasCostos(th6){
        document.querySelectorAll('.costos')[0].insertBefore(th6, document.querySelectorAll('.sumatotal')[6]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.costos')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma6')[i]) 
            }
    }

    aregarColumnasResumen(th7){
        document.querySelectorAll('.resumen')[0].insertBefore(th7, document.querySelectorAll('.sumatotal')[7]);
            for( let i=0; i<2; i++){                           //INSERTAR CELDAS EN EL BODY DE LA TABLA FLUJO DE EFECTIVO
                let  celda = document.querySelectorAll('.resumen')[1].querySelectorAll('tr')[i]     
                celda.insertBefore(document.createElement('td'), document.querySelectorAll('.filasuma7')[i]) 
            }
    }
}
//FUNCION QUE AGREGA EL PERIODO A LAS TABLAS
function agregarPeriodo(aux) {
    const agregarColumnas = new AgregarColumnas()

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

        agregarColumnas.aregarColumnasFlujoEfectivo(th)
        agregarColumnas.aregarColumnasEstadoResultados(th1)
        agregarColumnas.aregarColumnasIngresos(th2)
        agregarColumnas.aregarColumnasCostosDirectos(th3)
        agregarColumnas.aregarColumnasGastosAdministrativos(th4)
        agregarColumnas.aregarColumnasRecursos(th5)
        agregarColumnas.aregarColumnasCostos(th6)
        agregarColumnas.aregarColumnasResumen(th7)
         
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
        
        agregarColumnas.aregarColumnasFlujoEfectivo(th)
        agregarColumnas.aregarColumnasEstadoResultados(th1)
        agregarColumnas.aregarColumnasIngresos(th2)
        agregarColumnas.aregarColumnasCostosDirectos(th3)
        agregarColumnas.aregarColumnasGastosAdministrativos(th4)
        agregarColumnas.aregarColumnasRecursos(th5)
        agregarColumnas.aregarColumnasCostos(th6)
        agregarColumnas.aregarColumnasResumen(th7)
   
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


const presupuesto =  new PresupuestoCalls()
imprimirPresupuesto = async() =>{
    const ingresos = await presupuesto.ingresos()
    console.log("Los Ingresos registrados en la base de datos: ")
    console.log(ingresos)

    const costosDirectos = await presupuesto.costosDirectos()
    console.log("Los Costos Directos registrados en la base de datos: ")
    console.log(costosDirectos)

    const gastosAdministrativos = await presupuesto.gastosAdministrativos()
    console.log("Los Gastos Administrativos registrados en la base de datos: ")
    console.log(gastosAdministrativos)

}

imprimirPresupuesto()



//GUARDAR INGRESOS, COSTOS DIRECTOS, GASTOS ADMINISTRATIVOS, RECURSOS(% ASIGNACION)
const guardar = document.querySelector('.guardar')
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


//EVENTO QUE DETECTA EL CIERRE DE SESION
const cerrarsession = document.querySelector('.singoff')
cerrarsession.addEventListener('click', ()=>{
    localStorage.removeItem('token');   
})
