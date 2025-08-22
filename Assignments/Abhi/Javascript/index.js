let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum=0
let arrsum=0
let su=0
//sum of numbers in an array
{
    for (let i = 0; i < n.length; i++){
    arrsum=arrsum+n[i]
}
console.log("sum of an array :"+arrsum)

//Even Numbers
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        console.log(n[i])
    }
}
//sum of even numbers
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        sum = sum + n[i]
    }
}
console.log("sum of an even numb in an array :"+sum)
// sum of odd numbers
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 != 0) {
        su=su+n[i]
    }
} console.log("sum of odd numb in an array :"+su)

}
