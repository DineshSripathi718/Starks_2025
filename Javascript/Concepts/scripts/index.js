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

let a = [1,2,3,4,5,6,8,9,100,101];
console.log(a.length);
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