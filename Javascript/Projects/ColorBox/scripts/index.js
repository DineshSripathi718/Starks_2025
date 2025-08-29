const boxContainer = document.querySelector('.box');

console.log(boxContainer);

function redColorHandler(event){
    console.log(event);
    console.log('red color');
    boxContainer.innerText = "red";
    boxContainer.style.color = "white";
    boxContainer.style.backgroundColor = "red";
}

function greenColorHandler(){
    console.log('green color');
    boxContainer.innerText = "green";
    boxContainer.style.backgroundColor = "green";
}

function yellowColorHandler(){
    console.log('yellow color');
    boxContainer.innerText = "yellow";
    boxContainer.style.color = "black";
    boxContainer.style.backgroundColor = "yellow";
}

function clearHandler(){
    boxContainer.innerText = "press a button to change my color";
    boxContainer.style.color = "black";
    boxContainer.style.backgroundColor = "transparent";
}

function KeyboardEvent(event){
    const key = event.key.toLowerCase();
    if(key === 'r'){
        redColorHandler(event);
    } else if(key === 'g'){
        greenColorHandler();
    } else if(key === 'y'){
        yellowColorHandler();
    } else if(key === 'c'){
        clearHandler();
    }else{
        clearHandler();
        boxContainer.innerText = "please type r, g, y or c";
    }
}