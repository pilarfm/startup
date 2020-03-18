const DB_NAME = 'DB-texts';
const DB_VERSION = 1; 
const DB_STORE_NAME = 'texts';
let db;
const saveBtn = document.getElementById('save');
saveBtn.onclick = saveData;
const clearBtn=  document.getElementById('clear');  
clearBtn.onclick= clearData;


function saveData(){
    const data = document.getElementById('text-area').value;
    const req=db.transaction([DB_STORE_NAME], "readwrite").objectStore(DB_STORE_NAME).put(data, 'text');
    req.onsuccess = function(event) {
        document.getElementById('saved-data').innerHTML =  data;
      };
}

function clearData(){
    db.transaction([DB_STORE_NAME], "readwrite").objectStore(DB_STORE_NAME).clear();
    document.getElementById('saved-data').innerHTML =  'information deleted';
    document.getElementById('text-area').value=null;
}

function openDb() {
  const req = indexedDB.open(DB_NAME, DB_VERSION);
  req.onsuccess = function (evt) {
    db = this.result;
  };
  req.onerror = function (evt) {
  };
  req.onupgradeneeded = function (evt) {
    evt.currentTarget.result.createObjectStore(
      DB_STORE_NAME, { autoIncrement: false });

  };
}
openDb(); 