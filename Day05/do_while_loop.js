/*
**Day 5:**  
- Loops: `for`, `while`, `do...while`  
- Loop control: `break`, `continue`  
- **Mini Task:** Print even numbers from 1–50
*/
/*
While Loop : Used when we needs to execute the body atleast one time

initialize
do{
    body
    updation
}while(condition)

// initialize: From where to start the loop or from which iteration the loop should be started
// condition: To where the loop should be iterated or how much iteration should be performed | body runs whenever condtion became true
// updation: change in the initializer or changing initializer
*/

// let i = 1
// do{
//     console.log(i); // 1
//     i++
// }while(false)
// condition is false but body is executed at least one time

// let j = 1
// do{
//     console.log(j); // 1-2-3-4-5
//     j++
// }while(j <= 5)

// Revered loop
let k = 5
do{
    console.log(k); // 5-4-3-2-1
    --k
}while(k > 0)


// - **Mini Task:** Print even numbers from 1–50
let x = 1
do{
    if(x % 2 === 0) console.log(x);
    x++
}while(x <= 50)


// ............ break & continue
// break; stop the loop on a specific condition
let y = 1
do{
    if(y === 3) break
    console.log(y);
}while(y <= 5)

// continue --> skip current iteration/statements/code/body on a specific condition
let z = 1
do{
    if(z === 3) continue
    console.log(z);
}while(z <= 5)