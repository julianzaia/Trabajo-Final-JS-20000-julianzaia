const words = jQuery('.text .word');
const play = jQuery('#replay');
const animationOptions = {
  opacity: 1,
  marginLeft: 0,
  duration: 150 
};

// arma la secuencoa
const animations = sequenceAnimation(words, animateWordIn, animationOptions);
 
// corre la secuencia
animations();


// se arma un callback
function animateWordIn (element, options, callback = null) {
  const duration  = options.duration || 1500;
  return function() {
    jQuery(element).animate(options, 
      duration, 
      callback
    );
  } 
};


function sequenceAnimation(arr, animation, options, index = 0) {
  if(index < arr.length) {
    return animation(arr[index], options, sequenceAnimation(arr, animation, options, index + 1))
  }
  
  
  return animation(arr[index], options);
}




!function($){$.fn.scramble=function(t,e,n,i){("number"!=typeof t||NaN===t||t<1e3||t>2e4)&&(t=3e3),("number"!=typeof e||NaN===e||e<5||e>1e3)&&(e=20);var r={numbers:["1","0"],alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],punctuation:["@","#","$","%","^","*","(",")","&","+","=","}","{","|",":",";",">","<","?","~"," "],get alphanumeric(){return this.numbers.concat(this.alphabet)},get all(){return this.alphanumeric.concat(this.punctuation)}};void 0!==n&&n in r||(n="all"),n=r[n],i=void 0!==i&&i!==!1;var a=this.text();this.text("");var s=function(t){var e=t.length,n=Math.floor(Math.random()*e),r=t[n];return i?r.toUpperCase():r},o=function(t,e,n){var i=e.slice(0,n);return i=i.join(""),t.splice(0,i.length,i)},h=function(t){for(var e=[],i=0;i<t;i++)e.push(s(n));return e},c=function(n,i){this.iteration=0,this.spliceIteration=0,this.$element=n,this.word=i,this.len=i.length,this.arr=i.split("");var r=parseInt(t/e/this.len);this.scramble=function(t){this.iteration+=1;var e=h(this.len);this.iteration%r===0&&(this.spliceIteration+=1),o(e,this.arr,this.spliceIteration);var n=e.join("");this.$element.text(n),this.spliceIteration===this.len&&window.clearInterval(t)}},l=new c(this,a),u=window.setInterval(function(){l.scramble(u)},e);return this}}(jQuery);

function runAnimation() {
  
   jQuery('#text').addClass('pre-animation');
  jQuery('#text').scramble(3000, 20, "numbers", true);
  
  jQuery('#text').append('<span class="after">.</span>');
   jQuery('#text').removeClass( 'pre-animation' ).addClass('post-animation');
}

function runNext() {
   jQuery('#text').append( "<span>.</span>" );
}

runAnimation();