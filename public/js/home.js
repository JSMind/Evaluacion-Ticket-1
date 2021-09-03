
const cerrarsession = document.querySelector('.signoff')

cerrarsession.addEventListener('click', ()=>{

        localStorage.removeItem('token');

  })