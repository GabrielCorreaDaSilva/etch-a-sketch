const initializeGrid = (columns, rows) => {
    const container = document.querySelector('#grid-container');
    for(let i = 0; i <= columns; i++){
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        for(let j = 0; j <= rows; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('class', 'unit')
            column.appendChild(unit);
        }
        container.appendChild(column);
    }
    return container;
}

const grid = initializeGrid(16, 16);
