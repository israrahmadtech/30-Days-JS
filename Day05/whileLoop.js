/*
**Day 5:**  
- Loops: `for`, `while`, `do...while`  
- Loop control: `break`, `continue`  
- **Mini Task:** Print even numbers from 1–50
*/
/*
While Loop : Used when we don't know the number of iteration or the end of loop

initialize
while(condition){
    body
    updation
}

// initialize: From where to start the loop or from which iteration the loop should be started
// condition: To where the loop should be iterated or how much iteration should be performed | body runs whenever condtion became true
// updation: change in the initializer or changing initializer
*/

// let i = 0
// while(i <= 5){
//     console.log(i);
//     ++i
// }

// Reverse Looping:
let j = 5
while(j > 0){
    console.log(j);
    --j
} // 5-4-3-2-1


// - **Mini Task:** Print even numbers from 1–50
let x = 1
while(x <= 50){
    if(x % 2 === 0) console.log(x);
    x++
}


// ............ break & continue
// break; stop the loop on a specific condition
let y = 1
while(y <= 5){
    if(y === 3) break
    console.log(y);
}

// continue --> skip current iteration/statements/code/body on a specific condition
let z = 1
while(z <= 5){
    if(z === 3) continue
    console.log(z);
}