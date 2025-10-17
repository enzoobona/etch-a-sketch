const container = document.querySelector(".container")
const containerWidth = 960;
const containerHeight = containerWidth;

let squarePerSide = 16;

let gridRemoved = false;

container.style.width = containerWidth + "px";
container.style.height = containerHeight+ "px";

const btn = document.createElement("button")
btn.textContent = "New Grid";
btn.addEventListener("click", replaceGrid)

const btnContainer = document.querySelector(".buttonContainer")
btnContainer.appendChild(btn)

function replaceGrid(){
    squarePerSide = parseInt(prompt("Enter the amount of squares per side", "16"))
    console.log(squarePerSide)
    if(Number.isNaN(squarePerSide)){
        alert("Error, non-numerical value entered")
    } else if(squarePerSide > 100 || squarePerSide < 0) {
        alert("Error, the value entered must be less than 100 and more than 0")
    } else {
        const divs = document.querySelectorAll(".container div")
        divs.forEach(function(d){d.remove()});
        createGrid(squarePerSide)
    }
}

function opacityUp(){
    const divs = document.querySelectorAll(".container div")
    divs.forEach(function(d){d.style.opacity = parseFloat(d.style.opacity) + 0.1});
}

function createGrid(squareAmountSide){
    totalsquares = squareAmountSide*squareAmountSide;
    
    for(let i = 0; i < totalsquares; i++){
        const div = document.createElement("div");
        div.style.width = containerWidth/squareAmountSide + "px";
        div.style.height = containerHeight/squareAmountSide + "px";
        div.style.opacity = 0;

        div.addEventListener("mouseenter", (d) => {d.target.style.backgroundColor = "red"})
        div.addEventListener("mouseenter", opacityUp)
        div.addEventListener("mouseleave", (d) => {d.target.style.backgroundColor = ""})
        container.appendChild(div)
    }
}

createGrid(squarePerSide)

