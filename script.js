//connect to the DOM
const submitBtn = document.querySelector("#submit-grid-size");
const gridContainer = document.querySelector(".grid-container");

const defaultBackgroundColor = "white";
const gridDefaultSize = 16;
const defaultPixelColor = "black"

//when the submit button is pressed, prepare the grid.
submitBtn.addEventListener('click', () => {
    // Get and parse input
    let userGridSize = document.querySelector("#grid-size-input").value.trim();
    const input = parseInt(userGridSize, 10);

    // Clean UI and validate input
    cleanGridUI();
    validateGrid(input);
})

//validate input create grid if true
function validateGrid(input){
    if(input > 128 || input < 1 || !Number.isInteger(input)){
        alert("Invalid input, reseting to default.");
        createGrid(gridDefaultSize);
    } else {
        createGrid(input);
    }
}

function cleanGridUI(){
    gridContainer.innerHTML = '';
}

function createGrid(gridSize){
    //calculate the size of each pixel
    const pixelSize = 640 / gridSize;
    //generate pixels
    for (let i = 0; i < gridSize * gridSize; i++){
        //create ".gridPixel" div, and set up color and size
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridPixel");
        newDiv.style.backgroundColor = defaultBackgroundColor;
        newDiv.style.width = `${pixelSize}px`;
        newDiv.style.height = `${pixelSize}px`;

        gridContainer.appendChild(newDiv);

        //color each pixel on click or when mouse drags through
        newDiv.addEventListener("mousedown", () => colorPixel(newDiv));
        newDiv.addEventListener("mouseover", () => {if (isMouseDown) {colorPixel(newDiv)}});
    }
}


//set the color of pixels
function colorPixel(pixel){
    //temporary call to default, will implement color picking later
    pixel.style.backgroundColor = defaultPixelColor;
}

//set up mouse eventListerners
let isMouseDown = false;
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);
