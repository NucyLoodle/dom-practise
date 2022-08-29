// your JavaScript file
const container = document.querySelector('#container');

const p = document.createElement('div');
p.classList.add('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

container.appendChild(p);