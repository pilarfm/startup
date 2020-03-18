function dropEv(ev) {
    const data= document.getElementById("data");
    data.textContent='';
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    for (let i = 0; i < files.length ; i++) {
        const content = files[i].text()
        .then( function(content){
           data.textContent += '{'+content+'}';
        });
    }
  }
function dragEv(ev) {
    ev.preventDefault();
}
