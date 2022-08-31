const fetch = require('node-fetch');

fetch("https://rc-resume.neocities.org/data.json")
    .then(response => response.json())
    .then(json => console.log(json));

let div = document.createElement('div');
div.innerHTML = customerName();
console.log(div);

