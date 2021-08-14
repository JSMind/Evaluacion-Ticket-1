let x = document.getElementById('headTable').getElementsByTagName('th').length;
console.log(x)






function agregarFila() {

  // let fecha = document.getElementById('start').value
  // console.log(fecha)


  const columnas=document.getElementById('headTable')
  const columnasDataI=document.getElementById('bodyColINGRESOS')
  const columnasDataE=document.getElementById('bodyColEGRESOS')
  const columnasDataT=document.getElementById('bodyColTOTAL')
  const columnasDataTA=document.getElementById('bodyColTOTAL_ACUMULADO')


  const th=document.createElement('th')
  th.textContent="fecha"
  const tdI=document.createElement('td')
  tdI.textContent="informacionI"
  const tdE=document.createElement('td')
  tdE.textContent="informacionE"
  const tdT=document.createElement('td')
  tdT.textContent="informacionT"
  const tdTA=document.createElement('td')
  tdTA.textContent="informacionTA"


  columnas.insertBefore(th, document.getElementById('columFinal'));
  // columnasData.insertBefore(td, document.getElementById('.ultColumnSum'));

  columnasDataI.insertBefore(tdI,document.getElementById('ultColumnSumINGRESOS'))
  columnasDataE.insertBefore(tdE,document.getElementById('ultColumnSumEGRESOS'))
  columnasDataT.insertBefore(tdT,document.getElementById('ultColumnSumTOTAL'))
  columnasDataTA.insertBefore(tdTA,document.getElementById('ultColumnSumTOTAL_ACUMULADO'))
  // // document.insertBefore(th, columnas);


}


