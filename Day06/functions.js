/*
**Day 6:**  
- Functions: declaration, expression, arrow functions  
- Parameters vs arguments  
- **Mini Task:** Create a function to calculate BMI
*/

// ............. Function Declaration: This is the normal/traditional way of defining a function which perform hoisting
// function functionName(){
//     body
// }
function greet() {
    console.log("Hello Israr");
}
// This is called function declaration.
// This function will be hoist(perform hoisting) means you can call this function any where(below or above function definition) in this file
// Hoisting: While compilation, the function/variable go to the top, so it can be call/used any where

greet(); // Calling a function: Whenever we want to use a function - we call it


// ............. Function Expression: Whenever we define a function and store it in a variable, it called function expression
// This kind if function is not hoisted so it will throw an error if you call it before its definition.
const sayName = function(){
    console.log("My name is Israr Ahmad Tech");
}
sayName()


// Function with return: You can return(give back) something using return keyword in the function:
function pi(){
    return 3.1415
    console.log("PI"); // code after 'return' will not be executed
}
console.log(pi()); // 3.1415


// .............. Parameterize function: Whenever we needs to recieve values while calling the function, we recieve those values using parameters
function add(num1, num2){
    return num1 + num2
}
console.log(add(10, 20)); // 30

// .......................... Parameters vs Arguments .......................
// Parameters: The variables that we put while defining the function is called Parameters
// Parameters: The variables that we put/give/pass while calling the function is called Arguments

function sub(a, b) { // a & b ==== parameters
    return a - b
}
sub(10, 20) // 10, 20 === arguments


// - **Mini Task:** Create a function to calculate BMI ...................
function bmiCalculator(weight, height){
    let heightInMeters = height * 0.3048
    let bmi = weight / ( heightInMeters * heightInMeters )

    return bmi.toFixed(2)
}
let bmi = bmiCalculator(99, 5.8)

bmi < 18.5 ? console.log(`Your BMI = ${bmi} ( Underweight: BMI < 18.5 )`) :
bmi > 18.5 && bmi < 24.9 ? console.log(`Your BMI = ${bmi} ( Normal weight: 18.5 - 24.9 )`) :
bmi > 25 && bmi < 29.9 ? console.log(`Your BMI = ${bmi} ( Overweight: 18.5 - 24.9 )`) :
console.log(`Your BMI = ${bmi} ( Obesity: 30+ )`);

