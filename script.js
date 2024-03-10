// fill the container with properly sized squares

const gridContainer = document.querySelector('.container');
let a = +prompt('Write the grid size', '')
const gridSize = a*a;

const squareSize = (Math.sqrt((250000/gridSize))); // calculate proper square size for 500x500 px container
const squareDivArray = [];
function createGrid(gridSize) {
    
    for (i = 0; i<gridSize; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        gridContainer.appendChild(squareDiv);
        squareDivArray.push(squareDiv);
    }
// add event listeners to each squareDiv
    squareDivArray.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
    });
}

createGrid(gridSize);

// clear drawing area

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener("click", clearArea)

function clearArea() {
    squareDivArray.forEach((div) => {
        div.style.background = "pink"
    })
}