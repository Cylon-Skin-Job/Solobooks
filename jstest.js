const { default: fetch } = require("node-fetch");

fetch('https://rc-resume.neocities.org/data.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

let rowNumber = 1;
let rowNum = ('row' + rowNumber);

function rowTableData()
{   function incrementRowTableData() {
    rowNumber += 1;
    rowNum = ('row' + rowNumber);
    console.log(rowNum);}
    incrementRowTableData();
    incrementRowTableData();
    incrementRowTableData();
}

rowTableData();
rowTableData();

let customerName = "Jimmy John's";
let tableData = `<td>${customerName}</td>`
console.log(tableData);

