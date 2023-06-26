console.log("this script is connected")

const currentColor = document.querySelector("#current-color");

const paletteColors = document.querySelectorAll(".color");

console.log(paletteColors);

let div = document.createElement("div");
const canvas = document.querySelector("main");

 for (let i = 0; i < 10; i ++) { 
    for (let j = 0; j < 10; j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click",(event)=>{
            
        const currentColor = document.querySelector("#current-color");
        cell.style.backgroundColor = currentColor.style.backgroundColor;
    })
        canvas.appendChild(cell);
    }
    }

for(let paletteColor of paletteColors) {
    paletteColor.addEventListener("click", (event) => {
        let selectedColor = event.target.style.background;
        currentColor.style.backgroundColor = selectedColor;
    })
}








