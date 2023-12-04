const container = document.querySelector('#container');

let gridSize = 16;
let interactions = 0;

function setSize() {
    let userInput = prompt('Enter the grid size: (between 16 and 100)');
    while (userInput < 16 || userInput > 100 || userInput === null) {
        if (userInput === null) {
            return;
        }
        userInput = prompt('Please enter a size between 16 and 100:');
    }
    gridSize = userInput;
    container.innerHTML = '';
    addGrid();
}

function addGrid() {
    for (i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = 40 / gridSize + 'em';
            square.style.height = 40 / gridSize + 'em';

            
            square.addEventListener('mouseover', function() {
                interactions++;
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

                square.style.backgroundColor = randomColor;
                square.classList.remove('transition-delay');
            });
            
            square.addEventListener('mouseout', function() {
                square.classList.add('transition-delay');
                setTimeout(function() {
                    square.style.backgroundColor = 'white';
                }, 1000);
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

addGrid();