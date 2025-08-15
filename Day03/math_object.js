/*
**Day 3:**  
- Math object basics (`Math.floor`, `Math.random`, `Math.max`)  
- **Mini Task:** Random number generator (1–100)
*/

// 1. Math.floor : Used to convert a decimaled number into normal number (102.32 --> 102)
// Math.floor(number)
console.log(Math.floor(100000.8392)); // 100000

// 2. Math.random() : Return a long decimal number less than 0
console.log(Math.random()); // 0.1746449754623638 --> Number can be any

// 3. Math.max() : Returns the maximum in a set of numbers
console.log(Math.max(1, 2)); // 1
console.log(Math.max(20, 10)); // 20
console.log(Math.max(20, 10, 32, 9, 38, 78)); // 78


// - **Mini Task:** Random number generator (1–100)
let luckyNum = Math.floor((Math.random() * 100) +1) // +1 = can't be zero | * 100 = for unit conversion