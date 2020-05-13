
let readers = [{
    id: 1,
    name: "Anna",
    books:["Harry Potter", "War and Peace"],
    age: 20,
    car:"Ford",
},{
    id: 2,
    name: "Andrey",
    books:["Harry Potter", "War and Peace"],
    age: 18,
    car:"Reno",
},{
    id: 3,
    name: "Nadya",
    books:["Harry Potter", "War and Peace"],
    age: 25,
    car:"Mers",
},{
    id: 4,
    name: "Masha",
    books:["Harry Potter", "War and Peace"],
    age: 20,
    car:"Audi",
},{
    id: 5,
    name: "Anna",
    books:["Harry Potter", "War and Peace"],
    age: 30,
    car:"BMW",
}];

function fun (arr){
    let table = document.createElement("table");
    let blockEl = document.getElementsByClassName ("block")[0];
    blockEl.appendChild(table); //вставил в div  таблицу
    let headTable = document.createElement("thead");
    table.appendChild(headTable); // в таблицу создал строку с заголовками сверху
    let bodyTable = document.createElement("tbody");
    table.appendChild(bodyTable); //вставил в таблицу тело таблицы

    let row = document.createElement("tr");
    
    let headCell = document.createElement("th");
    let cell = document.createElement("td");
    let searhArr = document.getElementById("container");
    for ( let elem1 in arr){
        row = headTable.appendChild(row); // не работает??????????????????????
    };
    for ( let elem1 in arr){
        row = bodyTable.appendChild(row);
    };
  

}
fun(readers);