let isMouseDown = false;

function createGrid(squaresPerSide) {
    const container = document.getElementById('container');

    container.innerHTML = ''; // Clear existing grid

    const squareSize = 960 / squaresPerSide; // Calculate size of each square

    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                changeSquareColor(square);
            }
        });
        
        container.appendChild(square);
    }
}

//Added function to change square color

function changeSquareColor(square) {

    //square.style.backgroundColor = 'black';

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Initialize default grid
createGrid(16); 


const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    let squaresPerSide = prompt("Enter number of squares per side (max 100):");
    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(squaresPerSide);
});


// Track when mouse button is pressed down
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

// Track when mouse button is released
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});