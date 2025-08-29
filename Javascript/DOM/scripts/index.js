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
