const imageContainer = document.querySelector('.imageContainer');

const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');

showBtn.addEventListener('click', () => {
    imageContainer.innerHTML = "";
    const selectValue = document.getElementById('category').value.toLowerCase();
    
    let path = './assets/';

    const image = document.createElement('img');
    

    if(selectValue === "king cobra"){
        path += 'kingcobra.jpg';
    }else if(selectValue === 'python'){
        path += 'python.jpg';
    }else if(selectValue === 'boa'){
        path += 'boa.jpg';
    }else if(selectValue === 'anaconda'){
        path += 'anaconda.jpg';
    }

    image.src = path;

    imageContainer.append(image);
    imageContainer.classList.remove('hide');
    hideBtn.classList.remove('hide');
});


hideBtn.addEventListener('click', () => {
    imageContainer.classList.add('zoom-out');
    setTimeout(() => {
        imageContainer.classList.remove('zoom-out')
        imageContainer.classList.add('hide');
        hideBtn.classList.add('hide')
    }, 500)
})