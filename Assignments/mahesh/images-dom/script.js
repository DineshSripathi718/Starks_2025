const reset=document.querySelector(`#reset`);
const Imgbtn=document.querySelector(`#AmlImg`)
const Imggentr=document.querySelector('#box')
function ShowResetbtn(){
    reset.innerHTML=`<button onclick="Reset()">Reset</button>`;
}
function RmResetbtn(){
    reset.innerHTML=``;
}
function Reset(){
    RmResetbtn();
    Default();
}
function Genimg(){
    const selected = Imgbtn.value;

    if (selected === "Lion") {
        Lion();
    } else if (selected === "Eagle") {
        Eagle();
    } else if (selected === "Snake") {
        Snake();
    } else if (selected === "Fish") {
        Fish();
    } else if (selected === "Rabbit") {
        Rabbit();
    } else {
        Default();
    }
}


function Default(){
    Imggentr.innerHTML=`<p>Select something to display</p>`;
    
}
function Lion(){
    Imggentr.innerHTML = `<img src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg" alt="Lion" height="300" width="300">`;
    ShowResetbtn();
}

function Eagle(){
    Imggentr.innerHTML = `<img src="https://cdn.britannica.com/96/76096-050-8CF14F84/Bald-eagle-snag-Alaska-Kenai.jpg" alt="Eagle" height="300" width="300">`;
    ShowResetbtn();
}

function Snake(){
    Imggentr.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoIgvG6SBsOXkkwDdPKPSCe3_XiWe6I1U-w&s" alt="Snake" height="300" width="300">`;
    ShowResetbtn();
}

function Fish(){
    Imggentr.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_417478_orange_goldfish.jpg?v=1569427841" alt="Fish" height="300" width="300">`;
    ShowResetbtn();
}

function Rabbit(){
    Imggentr.innerHTML = `<img src="https://i.natgeofe.com/k/58df97a7-5c47-44b8-97c1-cddecd7d4a4f/full-body-cottontail_3x4.jpg" alt="Rabbit" height="300" width="300">`;
    ShowResetbtn();
}