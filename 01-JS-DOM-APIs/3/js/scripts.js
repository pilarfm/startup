

window.onload = function(){


} 

function clickAlert(){
    fetchJoke();
}

document.getElementById('boton').onclick= clickAlert;
let jokeSection = document.getElementById('joke-section');

function fetchJoke(){
  fetch('http://api.icndb.com/jokes/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    jokeSection.innerHTML= json.value.joke;    
  })
  .catch(function(err) {
    console.error(err);
    jokeSection.style.background='red';
  });
}
