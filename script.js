const gridContainer = document.querySelector('.container');

let gridSize;
// ask for grid size
function getGridSize() {
    let a;
    do {
        a = +prompt('Write the grid size 16-100', '');
    } while (a<16 || a>100);
    return a*a;
}

// fill the container with properly sized squares
let squareDivArray = [];
function createGrid(gridSize) {
    let squareSize = (Math.sqrt((500*500/gridSize))); // calculate proper square size for 500x500 px container
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
        div.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black";
        });
    });
}

// clear drawing area
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener("click", clearArea)

function clearArea() {
    squareDivArray.forEach((div) => {
        div.style.background = "pink";
    });
};

// clear gridArea and resize it
const newGridBtn = document.querySelector('#newGrid');
newGridBtn.addEventListener("click", () => {
    gridContainer.textContent = '';
    createGrid(getGridSize());
});