const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}