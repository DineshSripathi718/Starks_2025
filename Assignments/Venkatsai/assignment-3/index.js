//do-while loop
//write a program to find the sum of 10 natural numbers.
let numadd=0;
let g=1;

do
{
    numadd+=g;
    g++;
}
while(g<=10);

console.log(numadd);


//write a program to find if the sum of 10 natural numbers is a even or odd number
let totalnum=0;
let h=1;

do
{
    totalnum+=h;
    h++;
}
while(h<=10);

console.log(totalnum);

if(totalnum%2==0){
    console.log("even");
}
else{
    console.log("odd");
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
} while (k >= 1);

//forloop
//write a program to find the sum of 10 natural numbers.
let Sum = 0;

for (let i = 1; i <= 10; i++) {
    Sum += i;
}

console.log("The sum of the first 10 natural numbers is:", Sum);


//write a program to find if the sum of 10 natural numbers is a even or odd number
let totalSum = 0;

for (let i = 1; i <= 10; i++) {
    totalSum += i;
}

console.log("The totalsum of the first 10 natural numbers is:", totalSum);

if(totalSum%2 == 0){
    console.log(totalSum, "is even number");
}else{
    console.log(totalSum, "is odd number");
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
//write a program to find the sum of 10 natural numbers.
let add=0;
let f=1;

while(f<=10){
    add += f;
    f++;
    
}
console.log(add);


//write a program to find if the sum of 10 natural numbers is a even or odd number
let total=0;
let a=1;

while(a<=10){
    total += a
    a++;
}
console.log(total);
if(total%2==0){
    console.log("even");

}else{
    console.log("odd");
}

//write a program to print the output as shown below
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



