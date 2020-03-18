

let saveBtn = document.getElementById('save');
saveBtn.onclick = saveData;
let clearBtn=  document.getElementById('clear');
clearBtn.onclick= clearData;

function saveData(){
    let data = document.getElementById('text-area').value;
    localStorage.setItem('data',data);
    document.getElementById('saved-data').innerHTML =  localStorage.data;
}

function clearData(){
    localStorage.removeItem('data');
    document.getElementById('saved-data').innerHTML =  'information deleted';
    document.getElementById('text-area').value=null;
} 
