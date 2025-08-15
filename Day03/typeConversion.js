/*
**Day 3:**  
- Type conversion (Number, String, Boolean)
- **Mini Task:** Random number generator (1–100)
*/

// Types to TYPE CONVERSION:
// 1. Implicit Type Converion: JS change/convert the type of a data automatically by its own whenever it needs to be converted

// Number + String --> String
console.log(5 + "10"); // "510" (number --> string)

// String * String --> Number
console.log("5" * "10"); // 50 (string --> number)

// Boolean + Number --> Number
console.log(true + 5); // 6(1 + 5) (Boolean --> number)

// .........  I think es ko seekh seekh kr boorhe ho jao ge, es se acha ye hai k ap check kr liya kro, bohth zyada hai


// 2. Explicit Type Converion: Converting/changing the type of a data by your own using functions/methods

// String Converion : convert to string
console.log(String(100)); // "100"
console.log(typeof String(100)); // string

console.log(true.toString()); // "true"
console.log(typeof true.toString()); // string

console.log("hello".toLocaleString()); // "hello"
console.log(typeof "hello".toLocaleString()); // string


// Number Converion : convert to number
console.log(Number("100")); // 100
console.log(Number("hello")); // NaN
console.log(typeof Number("100")); // number
console.log(typeof Number("hello")); // number

console.log(+("100")); // 100
console.log(typeof +("100")); // number

console.log(parseInt("100")); // 100
console.log(typeof parseInt("100")); // number


// Boolean Converion : convert to Boolean(true-false)
console.log(Boolean(1)); // true
console.log(typeof Boolean(1)); // boolean
console.log(Boolean("hello")); // true
console.log(typeof Boolean("hello")); // boolean

console.log(Boolean(0)); // false
console.log(typeof Boolean(0)); // boolean
console.log(Boolean("")); // false
console.log(typeof Boolean("")); // boolean
