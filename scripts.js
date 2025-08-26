let paintBrushColor = 'black';
let isRandomColor = false;

const randomColor = () => {
    const red = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    const green = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    const blue = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    return `rgb(${red}, ${green}, ${blue})`;    
 }

const paintDiv = function (e) {
    isRandomColor ?
    e.target.setAttribute('style', `background-color: ${randomColor()}`) :    
    e.target.setAttribute('style', `background-color: ${paintBrushColor}`);
}
const initializeGrid = (size) => {
    const container = document.querySelector('#grid-container');
    for(let i = 0; i <= size; i++){
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        for(let j = 0; j <= size; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('class', 'unit');
            unit.addEventListener('mouseover', paintDiv);
            column.appendChild(unit);
        }
        container.appendChild(column);
    }
    return container;
}

const newGridButton = document.querySelector('#new-grid');
newGridButton.addEventListener('click', function() {
    const side = prompt('How many squares per side?');
    if(side > 100 || side < 1) 
    {
        alert('invalid value');
        return;
    }
    
    grid.textContent = '';
    initializeGrid(side);
})

const randomizeColorButton = document.querySelector('#random-color');
randomizeColorButton.addEventListener('click', () =>  {
    isRandomColor ? isRandomColor = false : isRandomColor = true;
});

const grid = initializeGrid(16);
