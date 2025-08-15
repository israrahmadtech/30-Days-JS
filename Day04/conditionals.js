/*
**Day 4:**  
- Conditionals: `if`, `else if`, `else`, `switch`
- **Mini Task:** Number guessing game (hardcoded number)
*/

// ............................ `if`, `else if`, `else` Statement ...........................

// if(condition) { statements/code/body } // body only executes when condiition is true
if(18 == "18") console.log("Condition is true");
if(18 === "18") console.log("Condition is true");

// if(condition) body 
// else if(condition) body   ---> Run if all above conditions become false & this become true
if(18 === "18") console.log("Run if true");
if(18 == "18") console.log("Run if true");


// if(condition) body 
// else { body } --> Must run if all above conditions became false
if(18 >= 19) console.log("Run if true");
else console.log("Run if not true");


// if(condition) {body}  --> Run if condition become true
// else if(condition) {body} --> Run if condition become true and all above conditions become false
// else {body} --> Must run if all above conditions became false
let age = 20
if(age < 18 && age >= 10) console.log("You are not eligible");
else if(age < 10) console.log("You are kid...");
else if(age <= 0) console.log("You are not born");
else console.log("You are eligible");



// - **Mini Task:** Number guessing game (hardcoded number)

// let guess = prompt("Guess the number");
// let luckyNum = Math.floor((Math.random() * 100) +1) // +1 = can't be zero | * 100 = for unit conversion
// console.log(luckyNum);

// if(guess === luckyNum) alert("You Win");
// else if(guess < luckyNum) {
//     console.log("Too Low...")
//     guess = prompt("Too Low ... Guess again:")
// }
// else if(guess > luckyNum) {
//     console.log("Too High...");
//     guess = prompt("Too High ... Guess again:")
// }


// ............................ Switch Statement ...........................
let fruit = "orange".toLowerCase()

switch (fruit){ // All below cases will be compared with "fruit" & matched case executes

    case "apple": console.log(`Apple is available`);
    break; // below case/cases will not be executed if above case not matched

    case "banana": console.log(`Banana is available`);
    break; // below case/cases will not be executed if above case not matched

    case "orange": console.log(`Orange is available`);
    break; // below code will not be executed if above case not matched

    default: fruit + " is not available" // This must run if all above cases do not matched
}


// Switch with Multiple cases
let thing = "Javascript".toLowerCase()

switch (thing){

    case "html":
    case "css":
    case "javascript": console.log(`${thing} is a language`);
    break;

    case "apple":
    case "banana":
    case "orange": console.log(`${thing} is a fruit`);
    break;

    case "afghanistan":
    case "pakistan":
    case "iran": console.log(`${thing} is a country`);
    break;

    default: thing + " is not available"
}