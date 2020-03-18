const DB_NAME = 'DB-texts';
const DB_VERSION = 1; 
const DB_STORE_NAME = 'texts';
let db;
let saveBtn = document.getElementById('save');
saveBtn.onclick = saveData;
let clearBtn=  document.getElementById('clear');  
clearBtn.onclick= clearData;


function saveData(){
    let data = document.getElementById('text-area').value;
    let trans = db.transaction([DB_STORE_NAME], "readwrite");
    let store = trans.objectStore(DB_STORE_NAME);
    let request =store.put(data, 'text');
    request.onsuccess = function(event) {
        document.getElementById('saved-data').innerHTML =  data;
      };
}

function clearData(){
    let trans = db.transaction([DB_STORE_NAME], "readwrite");
    let store = trans.objectStore(DB_STORE_NAME);
    store.clear();
    document.getElementById('saved-data').innerHTML =  'information deleted';
    document.getElementById('text-area').value=null;
}

function openDb() {
  //console.log("openDb ...");
  var req = indexedDB.open(DB_NAME, DB_VERSION);
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