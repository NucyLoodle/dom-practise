// your JavaScript file
const container = document.querySelector('#container');

const p = document.createElement('div');
p.classList.add('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

container.appendChild(p);

const h3 = document.createElement('div');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.classList.add('div');
newDiv.style.cssText = 'border: 3px solid black; background: pink';
container.appendChild(newDiv);

const h1 = document.createElement('div');
h1.classList.add('h1');
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

const newP = document.createElement('div');
newP.classList.add('newP');
newP.textContent = "ME TOO!"
newDiv.appendChild(newP);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });