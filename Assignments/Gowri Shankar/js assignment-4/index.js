const boxcontainer = document.querySelector('.box');
console.log(boxcontainer);

function bikeHandler(event) {
    console.log(event);
    boxcontainer.innerHTML = `
        <img src="https://images.jdmagicbox.com/quickquotes/images_main/royal-enfield-classic-350-dual-channel-abs-bs6-stealth-black-182662525-9ywsd.png" alt="bike image" class="bike-image">
        <button class="mybutton" onclick="clearHandler()">Clear</button>
    `;

}

function sportscarHandler() {
    boxcontainer.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdrDO1TS91CXiV8FWwJPIE8FI1v0-CdqYrg&s" alt="car image" class="car-image">
        <button class="mybutton" onclick="clearHandler()">Clear</button>
    `;
}

function vehicleHandler() {
    boxcontainer.innerHTML = `
        <img src="https://www.orfonline.org/public/uploads/posts/image/1718707620_Source%20Image%20-%20871x613%20(59).png" alt="vehicle image" class="car-image">
        <button class="mybutton" onclick="clearHandler()">Clear</button>
    `;
}

function clearHandler() {
    boxcontainer.innerHTML = "";
}



function handleKeyDown(event) {
    const key = event.key.toLowerCase();
    if (key === 'b') {
        bikeHandler(event);
    } else if (key === 's') {
        sportscarHandler();
    } else if (key === 'v') {
        vehicleHandler();
    }
    else
        boxcontainer.innertext="press only b, s, v only"
}