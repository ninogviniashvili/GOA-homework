let container = document.getElementById('container');

let p = document.createElement('p');
let textNode = document.createTextNode("JavaScript");
p.appendChild(textNode);
container.appendChild(p);


let h2 = document.createElement('h2');
h2.textContent = "Welcome!";
container.appendChild(h2);


let blueDiv = document.createElement('div');
blueDiv.style.backgroundColor = 'blue';
blueDiv.style.color = 'white';
blueDiv.textContent = "blue background.";
container.appendChild(blueDiv);


let button = document.createElement('button');
button.textContent = "Click Me";
container.appendChild(button);


let paragraph = document.createElement('p');
paragraph.textContent = "paragraph";

let span = document.createElement('span');
span.textContent = " Important!";
span.style.color = 'darkred';
paragraph.appendChild(span);
container.appendChild(paragraph);