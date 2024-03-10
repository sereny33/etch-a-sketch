// fill the container with properly sized squares

const gridContainer = document.querySelector('.container');
let a = +prompt('Write the grid size', '')
const gridSize = a*a;
// calculate proper square size for 500x500 px container
const squareSize = (Math.sqrt((250000/gridSize))); 

function createGrid(gridSize) {
    
    for (i = 0; i<gridSize; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        
        gridContainer.appendChild(squareDiv)
        
    }
}