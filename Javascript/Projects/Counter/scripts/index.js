//querySelector or getElementById

let number = 0;

const numberDisplay = document.getElementById('number');

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const selectIncreaseBy = document.querySelector('#increaseBy');

decreaseButton.disabled = true;

function increase(){
    decreaseButton.disabled = false;
    const selectedNumber = Number(selectIncreaseBy.value);
    number += selectedNumber;
    numberDisplay.innerHTML = number;
}

function decrease(){
    -- number;
    if(number == 0){
        decreaseButton.disabled = true;
    }       
    numberDisplay.innerHTML = number;
}

function reset(){
    number = 0;
    decreaseButton.disabled = true;
    numberDisplay.innerHTML = number;
}


increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);