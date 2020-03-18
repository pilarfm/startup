function dropEv(ev) {
    let data= document.getElementById("data");
    data.textContent='';
    ev.preventDefault();
    let files = ev.dataTransfer.files;
    for (var i = 0; i < files.length ; i++) {
        let content = files[i].text()
        .then( function(content){
           data.textContent += '{'+content+'}';
        });
    }
  }
function dragEv(ev) {
    ev.preventDefault();
}
