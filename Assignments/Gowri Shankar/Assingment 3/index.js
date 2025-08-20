let num1=3+4+6;
let num2=3%2-1;
let num3=4/2*2-1%(7-4);

if(num1>num2 && num1>num3){
    console.log(num1, "is larger than",num2,num3);
}
else if(num2>num3){
    console.log(num2,"is larger than",num1,num3);
}
else{
    console.log(num3,"is larger than",num1,num2);
}


let number=7;

if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}



//write a program to find the sum of 10 natural numbers.
let sum=0;

for (let i=1;i<=10;i++){
    sum +=i;
}
console.log("The sum of 10 natural numbers is : " + sum);

//write a program to find if the sum of 10 natural numbers is a even or odd number.

let totsum=0;

for (let i=1;i<=10;i++){
    totsum +=i
}

console.log("The sum of 10 natural numbers is : " + totsum);

if(totsum %2 == 0){
    console.log("The sum of 10 natural number is a even number");
}
else{
    console.log("The sum of 10 natural number is a odd number")
}
//write a program to print the output as shown below
// *******
// ******
// *****
// ****
// ***
// **
// *


for (let i = 7; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

//while loop

// Program to find the sum of 10 natural numbers using while loop
let add=0;
let f=1;

while(f<=10){
    add += f;
    f++;
    
}
console.log(" sum of 10 natural numbers: "+ add);


//write a program to find if the sum of 10 natural numbers is a even or odd number in while loop.

let total=0;
let a=1;

while(a<=10){
    total += a
    a++;
}
console.log("The sum of 10 natural numbers is : " +total);
if(total%2==0){
    console.log("The sum of 10 natural number is a even number");

}else{
    console.log("The sum of 10 natural number is a odd number");
}

//write a program to print the output as shown below in while loop
// *******
// ******
// *****
// ****
// ***
// **
// *


let b=7;
while(b>=1){
    let star = "";
    let c=1;
    while(c<=b){
        star += "*";
        c++;
    }
    console.log(star);
    b--;
}

// do-while loop

//write a program to find the sum of 10 natural numbers.
let numadd=0;
let g=1;

do
{
    numadd+=g;
    g++;
}
while(g<=10);

console.log(" sum of 10 natural numbers: "+numadd);


//write a program to find if the sum of 10 natural numbers is a even or odd number in while loop.

let totalnum=0;
let h=1;

do
{
    totalnum+=h;
    h++;
}
while(h<=10);

console.log("The sum of 10 natural numbers is : " +totalnum);

if(totalnum%2==0){
    console.log("The sum of 10 natural number is a even number");
}
else{
    console.log("The sum of 10 natural number is a odd number");
}

//write a program to print the output as shown below
// *******
// ******
// *****
// ****
// ***
// **
// *

let k = 7;

do {
    let starss = "";
    let l = 1;

    while (l <= k) {
        starss += "*";
        l++;
    }

    console.log(starss);
    k--;
}while (k >=1);


//even number program
let arr=[1,2,4,5,7,8,22,43,49,50,32];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i],"even number");
    }
}


//find the odd numbers inside an array

for(let i=0;i<arr.length;i++){
    if(arr[i]%2 !=0){
        console.log(arr[i],"are odd numbers")
    }
}
//find the sum of array and check if it is an even number or odd number

let adding=0;

for(let i=0;i<arr.length;i++){
    adding += arr[i];
}

if(adding%2==0){
    console.log(adding,"is even number");
}
else{
    console.log(adding,"is odd number");
}

// find the prime numbers inside an array

for(let i=0;i<arr.length;i++){
    let num=arr[i];
    let count=0;
    for(j=1;j<=num;j++){
        if(num%j==0){
            count++;
        }
    }
    
    if(count==2){
        console.log(arr[i],"is prime number");
    }
    else if(count==1)
    {
        console.log(arr[i],"is niether prime nor composite");
    }
    else
    {
        console.log(arr[i],"is composite number");
    }
}

// find the maximum number inside an array


let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Max element:", max);

// find the minimum number inside an array


let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (f[i] < min) {
        max = arr[i];
    }
}
console.log("Min element:", min);