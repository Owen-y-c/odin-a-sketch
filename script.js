const submitBtn = document.querySelector("#submit-grid-size");
submitBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let userGridSize = document.querySelector("#grid-size-input").value;
    let input = parseInt(userGridSize, 10);
    cleanGridInput(input);
})

const defaultColor = "white";
const gridDefaultSize = 16;
const gridContainer = document.querySelector(".grid-container");


function cleanGridInput(input){
    if(input > 128 || input < 1 || !Number.isInteger(input)){
        alert("Invalid input, reseting to default.");
        return createGrid(gridDefaultSize);
    } else {
        return createGrid(input);
    }
}

function createGrid(gridSize){

    const pixelSize = 640 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = defaultColor;
        newDiv.className = "gridPixel";
        newDiv.style.width = `${pixelSize}px`;
        newDiv.style.height = `${pixelSize}px`;
        gridContainer.appendChild(newDiv);

        newDiv.addEventListener("mousedown", () => colorPixel(newDiv));
        newDiv.addEventListener("mouseover", () => {if (isMouseDown) {colorPixel(newDiv)}});
    }
}



function colorPixel(pixel){
    let currentColor = "black"
    pixel.style.backgroundColor = currentColor;
}

let isMouseDown = false;
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false)
