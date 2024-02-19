const colors = ["red", "blue", "green", "white", "orange", "yellow", "pink"];

const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];
const span = document.getElementById("sp");

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * (colors.length));
    body.style.backgroundColor = colors[randomIndex];
    span.innerHTML = colors[randomIndex];
});