const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];
const span = document.getElementById("sp");

btn.addEventListener('click', () => {
    var hex = "#";

    for (let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * (colors.length));
        hex += colors[randomIndex];
    }

    body.style.backgroundColor = hex;
    span.innerHTML = hex;
});