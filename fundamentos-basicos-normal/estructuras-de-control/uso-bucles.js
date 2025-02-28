//factorial for
let factorial = 1;
for(let i = 10; i > 0; i = i - 1){
    factorial *=i
}
console.log(factorial)

//factorial while
let factorial2 = 1; 
let num = 10;
while (num > 1) {
    factorial2 *= num
    num--
}
console.log(factorial2)

//factorial break
let factorial3 = 1
let a = 10 
while (true) {
    factorial3 *= a
    a--
    if (a === 1) 
    break
}
console.log(factorial3)
