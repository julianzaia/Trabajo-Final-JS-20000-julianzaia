// revisa si esta el darkmode en el local
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. agrega la clase al body
  document.body.classList.add('darkmode');
  // 2. Update el darkmode en el localstorage
  localStorage.setItem('darkMode', 'enabled');
}


const disableDarkMode = () => {
  // 1. Remueve la clase del body
  document.body.classList.remove('darkmode');
  
  // 2. updtae del darkmode en el lcoal 
  localStorage.setItem('darkMode', null);
  
}
 
//  si el usuario ya visito la pagina y arranca con el modo darkmode habilitardo y arranca de 0
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// cuando se apreta el boton
darkModeToggle.addEventListener('click', () => {
  // obteemos los settings
  darkMode = localStorage.getItem('darkMode'); 
  
  // condicional para habilitar y deshabilitar el darkmode
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // si esta habilitado, se apaga 
  } else {  
    disableDarkMode(); 
  }
});

