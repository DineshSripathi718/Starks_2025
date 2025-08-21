//sum of elements and check whether given sum is even or odd
function sumOfNatural(n) {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    
    }
    return sum;
   
}
let total=sumOfNatural(10);
console.log("Sum:", total);
if (total % 2 == 0) {
    console.log(total, "is Even");
} else {
    console.log(total, "is Odd");
}






//even or odd by functions in an array
a=[1,23,45,2,,42,56];
b=[2,34,5,6,7,3];


function EvenOrOdd(array){
    for(let i = 0; i < array.length; i ++){
        if(array[i]%2 == 0)
            console.log(array[i],"is even number");
        else
            console.log(array[i],"is odd number");
    }
}


EvenOrOdd(a);
EvenOrOdd(b);

//printing the pattern by using array
function Pattern() {
    for (let i = 7; i >= 1; i--) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";   
        }
        console.log(pattern);
    }
}

Pattern();

//printing the prime number using function
let arr = [2,3,4,5,6,7,8,9,13,14,15];

function PrimeArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let count = 0;

        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                count++;
            }
        }

        if (count === 2) {
            console.log(num, "is Prime number");
        } else if (num === 1) {
            console.log(num, "is Neither prime nor composite");
        } else {
            console.log(num, "is Composite number");
        }
    }
}

PrimeArr(arr);