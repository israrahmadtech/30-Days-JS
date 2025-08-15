/*
**Day 5:**  
- Loops: `for`, `while`, `do...while`  
- Loop control: `break`, `continue`  
- **Mini Task:** Print even numbers from 1–50
*/

// Loops are used to perform a repatative task
// like if you want to print numbers from 1-1000, its a difficult work - here we use loops

// for loop : When we know the numbers of iterations perform, we use for loop.
// iteration: how number of times the task should be done

// for(initialize, condition, updation){
//     body
// }

// initialize: From where to start the loop or from which iteration the loop should be started
// condition: To where the loop should be iterated or how much iteration should be performed | body runs whenever condtion became true
// updation: change in the initializer or changing initializer

// Program to print natural number upto to 9
// for(let x = 1; x < 10; x++){
//     console.log(x);
// }

// Program to print even number upto 50
// for(let i = 1; i <= 50; i++){
//     if(i % 2 === 0) console.log(i);
// }

// Program to print odd number till 30
// for(let i = 1; i <= 30; i++){
//     if(i % 2 !== 0) console.log(i);
// }

// Program to print prime number till 30
// for(let i = 1; i <= 30; i++){
//     for(let j = 1; j <)

//     if(i % 1 === 0 && i % i === 0) console.log(i);
// }


// ............ break & continue
// break; stop the loop on a specific condition

// for(let i = 0; i < 8; i++){
//     if(i === 5) break
//     console.log(i); 
// } // printed upto 4

// continue --> skip current iteration/statements/code/body on a specific condition
// for(let i = 0; i < 8; i++){
//     if(i === 5) continue
//     console.log(i); 
// } // printed upto 7 -- 5 is missed/ignored

for(let i = 0; i < 8; i++){
    console.log(i); 
    if(i === 5) continue // no skipping because code is already executed
}

