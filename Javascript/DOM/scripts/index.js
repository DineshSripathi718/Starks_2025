/* 
    Selectors
    1. getElementsByTagName
    2. getElementsByClassName
    3. getElementById
    4. querySelector
*/
// console.log(document.getElementById('para1'));
// console.log(document.querySelectorAll('title'));
// console.log(document.querySelectorAll('p'));

const para = document.querySelector('.para');

para.innerHTML = "<h1>This is text inserted from js</h1>";


function onclickHandler(){
    const para = document.querySelector('#paraChange');

    para.classList.toggle('paraChange');


    if(para.classList.contains('paraChange'))
        para.innerText = "This is after text.";
    else
        para.innerText = "This is before text.";

}

function onkeypressHandler(){
    console.log("Key Pressed");
}


//init - button text - subscribe
//after click - subscribed
//after sometime change it to unsubscribe
const button = document.getElementById('subscribeBtn');


const buttonHandler = (event) => {
    console.log(event);
    event.stopPropagation(); //stops event bubbling
    if(button.innerText.toLowerCase() == "subscribe"){
        button.innerText = "Subscribed";

        setTimeout(() => {
            button.innerText = "Unsubscribe";
            button.removeEventListener('click', colorChanger);
        },3000);
    }else{
        button.innerText = "Subscribe";
    }
}

function colorChanger(){
    
    button.innerText = "loading......"
}

button.addEventListener('click', buttonHandler);
button.addEventListener('click', colorChanger);