//even number program
let a=[1,2,4,5,7,8,22,43,49,50,32];
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(a[i],"even number");
    }
}


//odd number program
let b=[1,2,4,5,7,8,22,43,49,50,32];
for(let i=0;i<b.length;i++){
    if(b[i]%2!=0){
        console.log(b[i],"odd number");
    }
}



//finding whether the final sum of array is even or odd
let sum=0;
let c=[1,2,4,5,7,8,22,43,49,50,32];
for(let i=0;i<c.length;i++){
    sum += c[i];
}

if(sum%2==0){
    console.log(sum,"is even number");
}
else{
    console.log(sum,"is odd number");
}



//finding the prime number inside an array
let d=[1,2,4,5,7,8,22,43,49,50,31];

for(let i=0;i<d.length;i++){
    let num=d[i];
    let count=0;
    for(j=1;j<=num;j++){
        if(num%j==0){
            count++;
        }
    }
    
    if(count==2){
        console.log(d[i],"is prime number");
    }
    else if(count==1)
    {
        console.log(d[i],"is niether prime nor composite");
    }
    else
    {
        console.log(d[i],"is composite number");
    }
}



//find the maximum of array
let e = [1,2,4,5,7,8,22,43,49,50,31];
let max = e[0];

for (let i = 1; i < e.length; i++) {
    if (e[i] > max) {
        max = e[i];
    }
}
console.log("Max element:", max);




//find the minimum of array
let f = [1,2,4,5,7,8,22,43,49,50,31];
let min = f[0];

for (let i = 1; i < f.length; i++) {
    if (f[i] < min) {
        max = f[i];
    }
}
console.log("Min element:", min);