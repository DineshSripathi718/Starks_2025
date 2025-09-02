const boxcontainer=document.querySelector(".box")
const clearbtncontainer=document.querySelector(".clear")
boxcontainer.innerText="Click a button"
boxcontainer.style.color="black"

function clearbutton(){
    clearbtncontainer.innerHTML=`<button onclick="Clear()">clear</button>`;

}
function removeclearbutton(){
    clearbtncontainer.innerHTML="";

}

function redColorHandler(event){
    boxcontainer.style.backgroundColor="red"
    boxcontainer.innerText="red"
    clearbutton();
}
function blueColorHandler(event){
    boxcontainer.style.backgroundColor="blue"
    boxcontainer.innerText="blue"
    clearbutton();
}
function yellowColorHandler(even){
    boxcontainer.style.backgroundColor="yellow"
    boxcontainer.innerText="yellow"
    clearbutton();
}
function Clear(event){
    boxcontainer.style.backgroundColor="transparent"
    boxcontainer.innerText="Click a button"
    removeclearbutton();
}

function KeyboardEvent(event){
    const key = event.key.toLowerCase();
    if (key==='r'){
        redColorHandler();
    }
    else if (key==='b'){
        blueColorHandler();
    }
    else if (key==='y'){
        yellowColorHandler();
    }
    else if (key==='c'){
        Clear();
    }
    else{
        Clear();
        boxcontainer.innerText="please press a key in r or b or y or c "
    }
}