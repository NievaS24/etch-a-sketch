const container = document.querySelector("#container");
function changeColor (div) {
    const randomRed = Math.floor(Math.random() * 255);
        const randomGreen = Math.floor(Math.random() * 255);
        const randomBlue = Math.floor(Math.random() * 255);
        div.style.backgroundColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}
let width = 1000 / 16;
for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.style.width = width + "px";
    div.style.height = width + "px";
    container.appendChild(div);
    div.addEventListener("mouseover", () => changeColor(div));
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let number;
    do {       
        number = parseInt(prompt("Ingrese el numero de cuadrados por lados"));
    } while (number <= 0 ||number > 100 || !(Number.isInteger(number)));
    
    let i = 1;
    let div = document.querySelector("#div" + i);
    while (div != null) {
        container.removeChild(div);
        i++;
        div = document.querySelector("#div" + i);
    }
    width = (1000 / number) ;

    for (let i = 1; i<= (number * number); i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "div" + i);
        div.style.width = width + "px";
        div.style.height = width + "px";
        container.appendChild(div);
        div.addEventListener("mouseover", () => changeColor(div));
    }
})