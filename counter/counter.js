const value = document.getElementById("value");
let i = parseInt(value.innerHTML); 

const inc = document.getElementsByClassName("increase")[0];
const decrease = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];

inc.addEventListener('click', ()=>{
    i++;
    value.innerHTML = i;
});

decrease.addEventListener('click', ()=>{
    i--;
    value.innerHTML = i;
});

reset.addEventListener('click', ()=>{
    i = 0;
    value.innerHTML = i;
});