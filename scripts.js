let paintBrushColor = 'pink';
let isRandomColor = false;
let isShade = false;

const randomColor = () => {
    const red = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    const green = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    const blue = randomNumber = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    return `rgb(${red}, ${green}, ${blue})`;    
 }

const paintDiv = function (e) {
    let opacity = parseFloat(e.target.style.opacity) || 0;
    isRandomColor ?
    e.target.setAttribute('style', `background-color: ${randomColor()};`) :    
    e.target.setAttribute('style', `background-color: ${paintBrushColor};`);
    // Can paint a lighter shade on top of a darker one
    if(isShade ) {
        opacity += 0.1;
        e.target.style.opacity = opacity;
    } else e.target.style.opacity = '';
    // Cannot paint a lighter shade on top of a darker one
    // if(isShade ) {
    //     opacity += 0.1;
    // } else opacity = 1;
    // e.target.style.opacity = opacity;
}
const initializeGrid = (size) => {
    const container = document.querySelector('#grid-container');
    container.addEventListener('mouseover', (e) => {
        if(e.target.classList.contains('unit')) {
            paintDiv(e);
        }
    });
    for(let i = 0; i <= size; i++){
        const column = document.createElement('div');
        for(let j = 0; j <= size; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('class', 'unit');
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

const shadeButton = document.querySelector('#shade');
shadeButton.addEventListener('click', () =>  {
    isShade ? isShade = false : isShade = true;
});

const grid = initializeGrid(16);
