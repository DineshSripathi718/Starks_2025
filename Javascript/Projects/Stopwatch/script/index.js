let milliSecs = 0;
let secs = 0;
let mins = 0;
let hours = 0;

let intervalId =  0;

/* 
    1000ms = 1sec -> ms - 0
    60s = 1min -> sec - 0
    60min = 1hr -> min - 0

*/

console.log(document);

const timeViewer = document.querySelector('#timeViewer');
const startBtn = document.querySelector('.startButton');

startBtn.addEventListener('click', () => {
    if(startBtn.innerText.toLowerCase() === 'start'){
        startBtn.innerText = "Pause";
        intervalId = setInterval(() => {
            milliSecs += 100;

            if(milliSecs == 1000){
                secs ++;
                milliSecs = 0;
            }

            if(secs == 60){
                mins ++;
                secs = 0;
            }

            if(mins == 60){
                hours ++;
                mins = 0;
            }

            timeViewer.innerText = `${hours.toString().padStart(2, 0)} : ${mins.toString().padStart(2, 0)} : ${secs.toString().padStart(2, 0)} : ${milliSecs.toString().padStart(3, 0)}`;
        },100);
    }else{
        clearInterval(intervalId);
        startBtn.innerText = "Start";
    }
});


const stopBtn = document.querySelector('.stopButton');

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
})


