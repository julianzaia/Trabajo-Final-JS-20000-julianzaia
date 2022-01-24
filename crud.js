// declaraciones

const allSpans = document.querySelectorAll('.buttons span');
let res = document.querySelector('.res > span');
let key = document.querySelector('#key');
let keyValue = document.querySelector('#value');




allSpans.forEach(span=>{
    
    span.addEventListener("click" , e=>{
        if(e.target.classList.contains("clearAll")){
            check();
        }
        if(e.target.classList.contains("add")){
            add();
        }
        if(e.target.classList.contains("remove")){
            remove();
        }
        if(e.target.classList.contains("show")){
            show();
        }
    })
})

// las funciones

function clearData(){
  console.log('CLEAR');
  localStorage.clear()
  res.innerHTML = '';
}
  
    // checkea los inputs
    const showMessage =()=>{  
            res.innerHTML = '  <p class="error"> Los campos no pueden estar vacíos </p>'; 
            emptyInput();
    }
    // Resetea todo
    const clerAll = () => {
        // console.log('check')
        if (key.value.trim() !=='') {
            if (localStorage.getItem(key.value.trim())) {
                res.innerHTML = `Hemos encontrado el siguiente Item <span>${key.value}</span> ` ;
                emptyInput();
            }else{
                res.innerHTML = `<p class="error"> No hemos encontrado en la base de datos un item con el nombre <span>${key.value}</span> </p> ` ;
                emptyInput();
            }
        }else{
            showMessage();
        }
    }
    //  para agregar
    const add = () => {
        // console.log('add')
        if (key.value.trim() !==''  && keyValue.value.trim() !=='' && keyValue.value.trim () !==0) {
            // agrega los items al local
            localStorage.setItem(key.value.trim(),keyValue.value.trim());
            res.innerHTML = ` localStorage item  <span>${key.value}</span> Added  ` ;
            emptyInput();     
        }else{
            showMessage();
        }
    }
    // remover data
    const remove = () => {
        // console.log('remove')
         if (key.value.trim() !=='') {
             // cheque si existe en local
             if (localStorage.getItem(key.value.trim())) {
                 // saca items del local
                 localStorage.removeItem(key.value.trim());
                 res.innerHTML = ` El item  <span>${key.value}</span> fue eliminado ` ;
                 emptyInput();
             }else{
                res.innerHTML = ` <p class="error"> Item no encontrado <span>${key.value}</span> </p>` ;
                emptyInput();
            }
         }else{
            showMessage();
        }
    }
    // mostrtar
    const show = () => {
        // console.log('show')
        res.innerHTML='';
        localStorage.removeItem('darkMode'); 
        

        if (localStorage.length > 0) {
            // console.log(`found elements : ${localStorage.length}`)
            for (const [key ,value] of Object.entries(localStorage) ) {
                res.innerHTML += ` <span class="keys"> ${key} : ${value}</span> `;
             
            }
            
        } else {
              res.innerHTML = ` <p class="error"> La base de datos esta vacía <p>` ;
            }
    }

    // fnc para limpiar la funcion
        const emptyInput =()=>{
            key.value = ' ';
            keyValue.value =' ';
        }

 
 var monedaList = [localStorage];
  

 // funcion para crear un archivo CVS
        
function createCSV(array){
  var keys = Object.keys(array[0]); 
  
  var result = ''; //CSV contenidos
  result += keys.join(','); // la coma separa las columnas
  result += '\n'; //nueva columna
  
  array.forEach(function(item){ //recorre todo el array
    keys.forEach(function(key){//recorre todos los valores
      result += item[key] + ','; //la coma separa cada valor en columnas
    })
    result += '\n';//Crea una nueva columan
  })
  
  return result;
}


function downloadCSV(array) {
  csv = 'data:text/csv;charset=utf-8,' + createCSV(array); //Creates CSV File Format
  excel = encodeURI(csv); //Links to CSV 

  link = document.createElement('a');
  link.setAttribute('href', excel); //Links to CSV File 
  link.setAttribute('download', 'ConsultasMonedas.csv'); //Filename that CSV is saved as
  link.click();
}




