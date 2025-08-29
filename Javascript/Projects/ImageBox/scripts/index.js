const boxContainer = document.querySelector('.box');

function carButtonHandler(){
    boxContainer.innerHTML = '<img src = https://hagerty.co.uk/wp-content/uploads/2024/12/P90367104_highRes_pioneering-103ex-mak-Large.jpeg alt="car image" class="car-image">';
}

function bikeButtonHandler(){
    boxContainer.innerHTML = '<img src = https://www.peesafe.com/cdn/shop/articles/The-best-road-trip-companions-Top-10-Indian-bikes-for-long-rides.jpg?v=1540448947&width=1500 alt="bike image" class="car-image">';
}

function walkButtonHandler(){
    boxContainer.innerHTML = '<img src = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadGIYvxk2sukDFn9NUDEww3dk9tk-MurmyQ&s alt="walking image" class="car-image">';
}