const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const numb = document.querySelector('p');

let counter = localStorage.getItem('counter');
if(counter)numb.innerText = counter;

minus.onclick = () => {
    counter = Number(numb.innerText)
    counter --;
    numb.innerText = counter;
    localStorage.setItem('counter', counter);
};
plus.onclick = () => {
    counter = Number(numb.innerText)
    counter ++;
    numb.innerText = counter;
    localStorage.setItem('counter', counter);

};
