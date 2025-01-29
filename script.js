const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.style.width = "6vw";
    div.style.height = "6vw";
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
        const randomRed = Math.floor(Math.random() * 255);
        const randomGreen = Math.floor(Math.random() * 255);
        const randomBlue = Math.floor(Math.random() * 255);
        div.style.backgroundColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
    })
}

// container.addEventListener("mouseenter", (event) => {
//     let div = event.target.id
//     div.style.backgroundColor = "red";
// })