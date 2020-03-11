const scores = {
    "matches": [
        {"id" : 1,
         "name":"Won Matches"},
         {"id" : 2,
         "name":"Lost Matches"},
         {"id" : 3,
         "name":"Tied Matches"},
         
    ],

    "teams" : [
        {"id" : 1,
         "name":"Boca",
         "quantity" : [
             13 , 2 , 5
         ]},
         {"id" : 2,
         "name":"River",
         "quantity" : [
             12 , 3 , 7
         ]},
         {"id" : 3,
         "name":"Racing",
         "quantity" : [
             6 , 6 , 8
         ]},
         {"id" : 4,
         "name":"San Lorenzo",
         "quantity" : [
             5 , 8 , 7 
         ]},
         {"id" : 5,
         "name":"Independiente",
         "quantity" : [
             5 , 10 , 5
         ]},
         {"id" : 5,
         "name":"Lanus",
         "quantity" : [
             4 , 8 , 8
         ]},
         {"id" : 5,
         "name":"Gimnasia",
         "quantity" : [
             5 , 0 , 15
         ]},
         {"id" : 5,
         "name":"Velez",
         "quantity" : [
             4 , 1 , 15
         ]}
    ]
}

function createTable(scores) {

    var body = document.getElementsByTagName("body")[0];
    
    // create a  <table> and a <tbody>
    let table   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tblHead = document.createElement("thead");
    
    // Create all the matches
    const matches = scores.matches;
    //Create empty block
    let row = document.createElement("tr");
    let blockh = document.createElement("th");
    row.appendChild(blockh);
    // Creat all the matches at the top row
    matches.forEach(element => {
      let blockh = document.createElement("th");
      let texth = document.createTextNode(JSON.stringify(element.name));
      blockh.appendChild(texth);
      row.appendChild(blockh)
    })
    tblHead.appendChild(row);
   
    
    const teams = scores.teams;
    teams.forEach(element => {
        // Team for each row
      let row = document.createElement("tr");
      let blockh = document.createElement("th");
      let texth = document.createTextNode(JSON.stringify(element.name));
      blockh.appendChild(texth);
      row.appendChild(blockh)
        //Quantity for each row 
      let quantity = element.quantity;  
      quantity.forEach(element => {
        let block = document.createElement("td");
        let text = document.createTextNode(JSON.stringify(element));
        block.appendChild(text);
        row.appendChild(block);
      
      });
      tblBody.appendChild(row);
        
    });
    
    table.appendChild(tblHead);
    table.appendChild(tblBody);   
    body.appendChild(table);
  }

  createTable(scores);