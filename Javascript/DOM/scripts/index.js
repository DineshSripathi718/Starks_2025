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



const registerForm = document.getElementById('registerForm');

registerForm.addEventListener(
    'submit', (e) => {
        //preventing the page load
        e.preventDefault();

        //selecting the input fields
        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const passwordInput = document.getElementById("password");
        const rePasswordInput = document.getElementById("rePassword");

        const formData = {
            username : usernameInput.value,
            email : emailInput.value,
            phone : phoneInput.value,
            password : passwordInput.value,
            rePassword : rePasswordInput.value
        }

        console.log(formData);

        validateForm(formData);

        usernameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        passwordInput.value = "";
        rePasswordInput.value = "";
    }
);


function validateForm({username, email, phone, password, rePassword}){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[_@$!%*#?&])[A-Za-z\\d_@$!%*#?&]{8,}$/;

    const indianPhoneRegex = /^[6-9]\d{9}$/;

    const usernameErrorField = document.getElementById('usernameError');

    const userSuccessField = document.getElementById('usernameSuccess');

    const emailErrorField = document.getElementById('emailError');

    const emailSuccessField = document.getElementById("emailSuccess");

    if(username === ""){
        usernameErrorField.innerText = "Username should not be empty"    
    }else{
        usernameErrorField.innerText = "";
        userSuccessField.innerText = "Looks Good !";
    }

    if(email === ""){
        emailErrorField.innerText = "Email should not be empty";
    }else{
        if(emailRegex.test(email)){
            emailErrorField = "";
            emailSuccessField.innerText = "Looks Good !"
        }else{
            emailErrorField.innerText = "Enter a valid email";
        }
    }
}   
