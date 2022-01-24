



const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tasaEl = document.getElementById('tasa');




// la función calculate actuliza los elemntos en el dom. En este punto se debería conectar con una api por fetch
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

    //aca conectamos la api y pedimos la cotización del ticker. la respuesta la formatea como json

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const tasa = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${tasa} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * tasa).toFixed(2);

    } );
    
}

//eventos para select 
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);


tasa.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    
    calculate();
    

} );

function validarKeys(evt){
    
    // la variable code es la expresión decimal ascci de la tecla presionada
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // es un número del 0 al 9.
      return true;
    } else{ // cualquier otra tecla
      return false;   
        
      
    }
}



calculate();

