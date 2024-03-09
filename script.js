/* 
    1. Create grid of divs. (should be evenly spread with flex)
    2. Input is - mouse hover event Listener
        each div changes color on hover;   
    Output is - a sketch
        
    3. 'clear' button should return the grid to white.

*/

// Create grid of divs

const grid = document.querySelector('#container');

function createGrid() {
    let a = +prompt('Write your grid size', 16)
    let gridSize = a * a;
    for (let i = 0; i<gridSize; i++) {
        const div = document.createElement('div');
        div.classList.toggle('div');
        grid.appendChild(div);
        console.log('appendChild');
        
    }
}


grid.addEventListener('mouseover', () => {
    const div = document.querySelector('.container > div')
    div.style.backgroundColor = 'black';
})

