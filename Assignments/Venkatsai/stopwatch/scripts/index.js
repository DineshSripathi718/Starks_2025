// JavaScript
let millisecs = 0;
let secs = 0;
let mins = 0;
let hours = 0;

let IntervalId = 0;

const timer = document.querySelector('#timer');
const startbtn = document.querySelector('.startbutton');
const resetbtn = document.querySelector('.resetbutton');

startbtn.addEventListener('click', () => {
    if (startbtn.innerText.toLowerCase() === 'start') {
        startbtn.innerText = 'Pause';
        IntervalId = setInterval(() => {
            millisecs += 100;

            if (millisecs === 1000) {
                secs++;
                millisecs = 0;
            }
            if (secs === 60) {
                mins++;
                secs = 0;
            }
            if (mins === 60) {
                hours++;
                mins = 0;
            }

            timer.innerText = `${String(hours).padStart(2, 0)} : ${String(mins).padStart(2, 0)} : ${String(secs).padStart(2, 0)} : ${String(millisecs).padStart(3, 0)}`;
        }, 100);
    } else {
        startbtn.innerText = 'Start';
        clearInterval(IntervalId);
    }
});

resetbtn.addEventListener('click', () => {
    clearInterval(IntervalId);
    IntervalId = 0;
    timer.innerText = '00 : 00 : 00 : 000';

});