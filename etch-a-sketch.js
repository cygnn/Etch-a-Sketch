const body = document.querySelector('body');


const btn = document.createElement('button');
btn.textContent = 'Size';
let size = 16;
btn.addEventListener('click', () =>{
    removeGrid();
})

btn.addEventListener('click', () =>{ //better if it is dedicated function
    size = prompt("Please enter desired size for the grid.");
        if(size > 0 && size < 100){
            createGrid(size);
        }
        else{
            size = alert('Invalid size. Try again');
        }
    
});

const randColor = document.createElement('button');
randColor.textContent = 'Random colors';
let isRandColorClicked = false;
randColor.addEventListener('click',() => {
    isRandColorClicked = true;
});

const regularColor = document.createElement('button');
regularColor.textContent = 'Regular Color';
regularColor.addEventListener('click', () =>{
    isRandColorClicked = false;
});


const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');


body.appendChild(btn);
body.appendChild(randColor);
body.appendChild(regularColor);
body.appendChild(gridContainer);



//FUNCTIONS
function createGrid(size){
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('grid-item');
        gridContainer.appendChild(row);
        
        for(let j = 0; j < size; j++){
            let column = document.createElement('div');
            column.classList.add('grid-item-sub');
            column.addEventListener('mouseover', () => {
                if(isRandColorClicked == true){
                    column.style.backgroundColor = '#'+randomizeColor();
                }
                else{
                    column.style.backgroundColor = 'blue';
                }
                console.log(isRandColorClicked);
                
            });
            row.appendChild(column);
        }
    }
}

function removeGrid(){
    for(let i = 0; i < size; ++i){
        gridContainer.removeChild(gridContainer.firstElementChild);
        console.log(typeof gridContainer.removeChild(gridContainer.firstElementChild));
    }
    
}

function randomizeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}