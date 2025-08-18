
// Arrow Function: Modern and easy way to define function expressions

// const greet = () => { // definition
//     // body
// }
// greet() // calling

const greet = () => {
    console.log("Hello world");
}
greet() // Hello world

// Explicit return: We return(give back) something using return keyword
const pi = () => {
    return 3.1415
}
console.log(pi());


// Implicit return: Javascript return(give back) something without using return keyword
const PI = () => 3.1415
console.log(PI()); // 3.1415

// Using arrow functions with implicit return is the shortest way to define functions in JS

const printName = name => console.log(`My name is ${name}`); // This is the real power of Arrow functions and the purpose of its discovery
// if one parameter --> no need for paranthesis
printName("Israr") // My name is Israr


const sum = (a, b) => {

}