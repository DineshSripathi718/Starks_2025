// let value1 = 6;
// let value2 = 7;

// //add value2 with value1 and store the result inside value1

// console.log(value1+" before the operation")

// value1 += value2; //value1 = value1 + value2

// console.log(value1+" after the operation");

// let a = "5";
// let b =  5;
// console.log(a > b); //  false
// console.log(a < b); // false
// console.log(a == b) //true
// console.log(a != b); //false
// console.log(a >= b); //true
// console.log(a <= b ); // true
// console.log(a === b); //false
// console.log(a !== b);// true

// let databaseUsername = "tony@gmail.com";
// let databaseUserPassword = "Tony@1234";

// let username = "tony@gmail.com";
// let password = "Tony@1234";

// console.log(databaseUsername == username && databaseUserPassword == password);

// // console.log(!false);


// let a = 6;

// console.log(a++ );  //6
// console.log(a ++ ); //7
// console.log(a ++);  //8
// console.log(++ a);  //10
// console.log(-- a);  //9
// console.log(++ a);  //10
// console.log(a ++);  //10
// console.log(a --);  //11
// console.log(a --);  //10
// console.log(-- a);  //8
// console.log(a++ );  //8
// console.log(a);     //9

// let databaseUsername = "tony@gmail.com";
// let databaseUserPassword = "Tony@1234";

// let username = "tony@gmail.com";
// let password = "Tony@1234";

// console.log(databaseUsername == username && databaseUserPassword == password);

// (databaseUsername == username && databaseUserPassword == password)? console.log("login successful") :console.log("invalid username or password");

// 2 number - largest number 

// let num1 = 6;
// let num2 = 5;
// let num3 = 7;

// //condition - main
// (num1 > num2)? 
// //true block
// (num1 > num3)? console.log(num1, 'is larger than',num2,num3) : console.log(num3,'is larger than', num1,num2)
// : 
// //false block
// (num2 > num3)? console.log(num2, 'is larger than',num1,num3) : console.log(num3,'is larger than', num1,num2)


//print the if block statements only when a value is not empty

// let a = "";

// if(a){
//     console.log("if statements");
// }

// let num1 = 98;
// let num2 = 17;

// if(num1 > num2){
//     console.log(num1, "is larger than",num2);
// }

// if(num2 > num1){
//     console.log(num2,'is larger than',num1);
// }

// if(num1 > num2){
//     console.log(num1, "is larger than",num2);
// }else{
//     console.log(num2,'is larger than',num1);
// }


// let num3 = 78;

// if(num1 > num2 && num1 > num3){
//     console.log(num1, "largest number");
// }

// if(num2 > num1 && num2 > num3){
//     console.log(num2, "is larger than ",num1, num3);
// }

// if(num3 > num1 && num3 > num2){
//     console.log(num3, "is larger than ",num1, num2);
// }


// if(num1 > num2 && num1 > num3){
//     console.log(num1, "largest number");
// }else if(num2 > num3){
//     console.log(num2, "is greater than",num1,num3);
// }else{
//     console.log(num3,"is greater than",num1,num2);
// }

// let value = 1;
// let userRole = "sales";

// switch(userRole){
//     case "admin":
//         console.log("this is case 4");
//         console.log("this is case 4");
//         console.log("this is case 4");
//         console.log("this is case 4");
//         console.log("this is case 4");
//     break;
//     case "sales":
//         console.log("case 1");
//         console.log("case 1");
//         console.log("case 1");
//         console.log("case 1");
//     break;
//     case "developer" : 
//         console.log("case 2");
//         console.log("case 2");
//         console.log("case 2");
//         console.log("case 2");
//         console.log("case 2");
//     break;
//     default : 
//         console.log("default block");
//     break;
// }


/* 
Assignment : 

write a program to find the largest number of the below expression
num1 = 3 + 4 + 6
num2 = 3%2 - 1
num3 = 4/2*2-1%(7-4)

write a program to find the even or odd number */

// let num1 = 1;

// if(num1 % 2 == 0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

// console.log("fkjaslkdfj;lsdfjl;s")

// num1 = 2;
// if(num1 % 2 == 0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

// num1 = 3;
// if(num1 % 2 == 0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }


// for(let i = 1; i <= 10; i ++){
//     if(i % 2 == 0){
//         console.log(i,"Even number");
//     }else{
//         console.log(i,"Odd number");
//     }
// }

//write a program to find the sum of 10 natural numbers.
//write a program to find if the sum of 10 natural numbers is a even or odd number
//write a program to print the output as shown below
// *******
// ******
// *****
// ****
// ***
// **
// *

// let pattern = "";
// for(let stars = 7; stars >= 1; stars --){
//     for(let i = stars; i >= 1; i --){
//         pattern += i;
//     }
    
//     pattern += '\n';
// }

// console.log(pattern);

//prime number - divi 1 and itself - 2 times

// let num = 15;

// for(let num = 1; num <= 100; num ++){
   
//     let count = 0;

//     for(let i = 1; i <= num; i ++){
//         if(num % i == 0){
//             count ++;
//         }
//     }

//     if(count == 2){
//         console.log("prime number");
//     }else{
//         console.log("composite number");
//     }
// }

// for(let i = 1; i <= 3; i ++){
//     for(let j = 1; j <= 3; j ++){
//         console.log('i : ',i,"j : ",j);
//     }
// }

/* //init
let userChoice = true;

//condition
while(userChoice){
    let num = Number(prompt("Enter a number"));

    let zeroCount = 0;
    for(let i = 1; i <= num; i ++){
        if(num % i == 0){
            zeroCount ++;
        }
    }

    if(zeroCount == 2){
        console.log(num,"Prime number")
    }else{
        console.log(num," is not a prime number");
    }

    const userInput = prompt("Do you want to check another number : (yes or no) : ");

    //update
    if(userInput == "yes"){
        userChoice = true;
    }else{
        userChoice = false;
    }
} */

/* //init
let userChoice = true;

//condition
for(;userChoice;){
    let num = Number(prompt("Enter a number"));

    let zeroCount = 0;
    for(let i = 1; i <= num; i ++){
        if(num % i == 0){
            zeroCount ++;
        }
    }

    if(zeroCount == 2){
        console.log(num,"Prime number")
    }else{
        console.log(num," is not a prime number");
    }

    const userInput = prompt("Do you want to check another number : (yes or no) : ");

    //update
    if(userInput == "yes"){
        userChoice = true;
    }else{
        userChoice = false;
    }
} */


//convert all the for loop assign into while loop and do-while loop and push in git repo

// let i = 9;
// while(i <= 7){
//     console.log("inside while loop");
//     i ++;
// }


// i = 1;
// do{
//     console.log("inside do while loop");
//     i ++;
// }while(i <= 7);

// let pattern = "";

// let i = 7;
// do{
    
//     let j = i;
//     do{
//         pattern += "*";
//         j --;
//     }while(j >= 1)

//     pattern += '\n';
//     i --;
// }while(i >= 1);

// console.log(pattern);

// let i = 1;

// do{
//     console.log(i,"do while");
//     i ++;
// }while( i <= 10);

// let a = 5;

// console.log(a); // 5

// a = 6;
// console.log(a); //6

// a = 6;

// console.log(a); //error | 6 | 5

// a = 9;

// console.log(a); //error | 9

// let a = [1,2,3,4,5,6,7,8,9];
// let b = new Array();
// console.log(typeof(a));

// console.log(a);
// console.log(a[2]);
// a[2] = 33;
// console.log(a);
// console.log(a.length);

// let a = [1,2,3,4,5];
// let b = [11,12,13,a];

// console.log(a);
// console.log(b);

// for(let i = 0; i < b.length; i ++){
//     console.log(b[i]);
//     if(i == 3){
//         for(let j = 0; j < b[i].length ;j ++){
//             console.log(b[i][j]);
//         }
//     }
// }

// let a = [1,12,55,33,14,55,6,8,9,55,100,101];
// let b = [1,2,3]
// b.push(a);

// console.log(b);

// console.log(a.indexOf(55, a.indexOf(55) + 1));
// console.log(a.lastIndexOf(55));

// let b = new Array(10);
// console.log(b.fill(4, 10));
// console.log(a.fill(4, 14, 17));
// console.log(a.includes(55));
// console.log(a.includes(14, 3));
// let b = [];
// for(let i = 0; i < a.length; i ++){
//     b.push(a[i]);
// }



// console.log("a : ",a);
// console.log("b : ",b);

// a[9] = 103;
// console.log("a : ",a);
// console.log("b : ",b);

// console.log(a.sort());
// console.log(a.slice(2, 8));
// console.log(a.length);
// // a[90] = 45;
// a.push(45);
// a.push(32);
// a.push(12);
// a.push(11);
// console.log(a);

// a.pop();
// console.log(a);

// a.unshift(5);
// console.log(a);

// a.shift();
// console.log(a);

// a.splice(5, 0, 55, 45, 35);
// console.log(a);

// a.splice(5,6, 45, 65);
// console.log(a);

// //sum of values inside array

// let sum = 0;

// for(let i = 0; i < a.length; i ++){
//     sum += a[i];
// }

// console.log(sum);

//find the even numbers inside an array
//find the odd numbers inside an array
//find the sum of array and check if it is an even number or odd number
// find the prime numbers inside an array
// find the maximum number inside an array
// find the minimum number inside an array

let a  = [1,2,3,4,5];

let b = [11,12,13,14,15];

let c = [21,22,23,24,25];


// //a- name - array
// for(let i = 0; i < a.length; i ++){
//     if(a[i] % 2 == 0)
//         console.log(a[i],"is a even number");
//     else
//         console.log(a[i],"is a odd number");
// }


// //b - name - array
// for(let i = 0; i < b.length; i ++){
//     if(b[i] % 2 == 0)
//         console.log(b[i],"is a even number");
//     else
//         console.log(b[i],"is a odd number");
// }


// //c - name - array
// for(let i = 0; i < c.length; i ++){
//     if(c[i] % 2 == 0)
//         console.log(c[i],"is a even number");
//     else
//         console.log(c[i],"is a odd number");
// }

// function sample(name = "guest",age=20){
//     console.log(name,"sample",age);
// }

// sample();
// sample("raj",24);
// sample("tina",34);

// function findEvenOrOdd(array){
//     if(array.length >= 1){
//         for(let i = 0; i < array.length; i ++){
//             if(array[i]%2 == 0)
//                 console.log(array[i],"is even number");
//             else
//                 console.log(array[i],"is odd number");
//         }
//     }else{
//         if(array%2 == 0)
//             console.log(array,"is even number");
//         else
//             console.log(array,"is odd number");
//     }
// }


// findEvenOrOdd(a);
// findEvenOrOdd(b);
// findEvenOrOdd(c);

//convert all the assignments into functions if necessary

// let users = ["Ram", "Tina", "John", "Ramesh"];

//if user exist -> welcome name
//else user not exist

// function isUserPresent(user){
//     return users.includes(user);
//     console.log(users);
// }

// let user = prompt("Enter username : ");

// if(isUserPresent(user)){
//     let num = Number(prompt("Enter a number"));

//     if(num%2 == 0)
//         console.log(num,"even number");
//     else
//         console.log(num,"odd number");
// }else{
//     console.log("user not present");
// }


// function add(a, b){
//     console.log(a + b);
//     return a + b;
// }


// let variable = add(3,2);
// console.log(variable * 2);


//check if the given number is prime number or not if it is a prime number then square it and then check if the square of prime number is even.

// let num = Number(prompt("Enter a number"));

// function isPrimeNumber(number){
//     let count = 0;
//     for(let i = 1; i <= number; i ++){
//         if(number%i == 0)
//             count ++;
//     }

//     if(count == 2)
//         return true;
//     else
//         return false;
// }

// if(isPrimeNumber(5)){
//     let square = 5 * 5;
//     findEvenOrOdd(square);
// }



// function sample1(para1){
//     para1();
// }

// const sample2 = (para1, para2) => {
//     console.log(para1,"sample 2",para2);
// }

// const add = (para1, para2) => para1 + para2;


// console.log(add(5,7));
// console.log(add(58,5));


//convert all the function into arrow functions
// a[90] = 89;
// let sum = 0;
// console.log(a.length);
// for(let i = 0; i < a.length; i ++){
//     sum += a[i];
// }

// console.log(sum);
// console.log(a);
//unwanted iterations - undefined + sum = NaN

// sum = 0;
// function forEachHandler(element, index, array){
//     sum += element;
// }

// a.forEach(forEachHandler);

// a.forEach(
//     (element, index) => {
//         sum += element;
//     }
// );
// console.log(sum);







a = [1,2,3,4,5,6,7];

a[20] = 34;

// console.log(a);

//iterations will be performed based on index values
// for(let i = 0; i < a.length; i ++){
//     console.log(a[i]);
// }


//iterations will be performed based on elements or values inside array
// a.forEach(
//     (e, i) => {
//         console.log(e, i);
//     }
// );

//array which is going have square values of a. Need to have the same length as a array

// function squareValue(e,i){
//     return i * i;
// }


// const duplicateArray = a.map(squareValue);

// b = a;
// console.log("B array : ",a);
// console.log("base array : ",a);
// console.log("Duplicate Array : ",duplicateArray);

// console.log("after changing the value : ");
// a[2] = 33;
// console.log("B array : ",a);
// console.log("base array : ",a);
// console.log("Duplicate Array : ",duplicateArray);

// console.log(a);
// const newArray = a.filter(
//     (e,i, arr) => {
//         return e%2 == 0;
//     }
// );

// console.log(newArray);

console.log(a);

const value = a.find((e) => {
    return e == 4;
});

// const value = a.reduce(
//     (pv,cv) => {
//         console.log(pv,cv);
//         return pv + cv;
//     }
// );


console.log(value);

