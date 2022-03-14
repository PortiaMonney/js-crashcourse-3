// let i= 10;
// do{
//     console.log(i);
// }while(i < 10);
// console.log("*****************");
// while(i < 10){
//     console.log(i);
// // }i++;
// for (let i = 0; i, 10; i++) {
//     if (i === 5) {
//         console.log("Five")
//         // continue;
//         // break;
//     }
//     console.log(i);

// }
// function with parameter
function myself() {
    console.log("My name is John Doe");
}
myself("john doe");
myself("jane doe");
myself();
myself();
myself();
myself();
function add(x, y) {
    let sum = x + y;
    console.log(sum);
}
add(5, 6);
add(6, 7);
add(7, 8);

function multiply(x, y) {
    let sum = x * y;
    console.log(multiply);
}
multiply(5, 6);
multiply(6, 7);
multiply(7, 8);
// function with return value
function add(x, y) {
    let sum = x + y;
    return sum;
}
let result = add(10 + 15);
let newResult = result = 2;
console.log(newResult);

// arrow function

let divide = (a, b) => a, b;
console.log(divide(10, 5));
console.log(multiply(10,5));

//Higher order function
//is a function that tkaes a function

let numbers=[0,1,2,3,4,5,6,7,8,9,10];
let squares = numbers.map((number) => number * number);
console.log(squares);
let addition=numbers.map((number)=>number + number);
console.log(addition);

let evens = numbers.filter((number)=>number % 2 ===0);
console.log(evens);
let odd  = numbers .filter((number)=>number % 2 !== 0);
console.log(odd)

let five =numbers.find((num)=>num ===5);
console.log(5);

//strigs
let sentence ="the big brown fox jump  over the lazy dog";
console.log(sentence.length)
console.log(sentence.charCodeAt(10));
console.log(sentence.concat("from concartination"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("brown"));
console.log(sentence.padStart(10));
console.log(sentence.padEnd(2));
console.log(sentence.repeat("2"))
console.log(sentence.replace("lazy,hardworking"));
console.log(sentence.slice(20,30));
console.log(sentence.substring);
let email ="kofi@emaiol.com";
console.log(email.split("@"))
console.log(sentence.toLocaleUpperCase());
console.log(sentence.toLocaleLowerCase());


 










/**
 * ! not
 * || or
 * && and
 */