
let searchButton= document.getElementById('search-button');
searchButton.onclick = dataSearch;
dataSearchJavaScript();


/* Function to fetch repo with q = JavaScript */

function dataSearchJavaScript(){
  fetch('https://api.github.com/search/repositories?q=JavaScript')
      .then(response => {
          if (!response.ok) throw Error(response.status);
    
          return response.json();
      })
      .then(data => {
          let firstLi = document.getElementById("first-li"); 
          firstLi.innerHTML += 'List of repositories including "JavaScript"';
          data.items.forEach(element => {
              let repo = JSON.stringify(element.html_url);
              let newLi = document.createElement("li");
              let newContent = document.createTextNode(repo);
              newLi.appendChild(newContent);
              firstLi.insertAdjacentElement('afterend', newLi);
          })
      })
      .catch(error => {
          console.log(error);
      }); 
}

/* Function to fetch repo with q = input text*/

function dataSearch(){
  let search = document.getElementById('search').value;
  search = JSON.stringify(search)
  fetch('https://api.github.com/search/repositories?q='+search)
      .then(response => {
          if (!response.ok) throw Error(response.status);
    
          return response.json();
      })
      .then(data => {
          let firstLi = document.getElementById("first-li"); 
          firstLi.innerHTML ='Lista de Repositorios con '+ search;
          data.items.forEach(element => {
              let repo = JSON.stringify(element.html_url);
              let newLi = document.createElement("li");
              let newContent = document.createTextNode(repo);
              newLi.appendChild(newContent);
              firstLi.insertAdjacentElement('afterend', newLi);
          })
      })
      .catch(error => {
          console.log(error);
      }); 
}
