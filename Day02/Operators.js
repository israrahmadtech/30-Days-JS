/* 
**Day 2:**  
- Operators: arithmetic, assignment, comparison, logical, ternary
*/

// Arithmetic Operators: +, -, *, /, %
// Assignment Operator: =
// Comparison Operators: ==, !=, ===, !==, <, >, <=, >=, <==, >==
// Logical Operators: &&, ||, !
// Ternary Operators: ? :


// .....................  Questions ...................
/*
Question 1:
Tumhare paas ye variables hain:

let a = 5;
let b = "5";
let c = 10;

Ab batana hai har expression ka result (true ya false) aur reason:

1.  a == b && c > a
2.  a === b || c < a
3.  !(a >= c) && a == b
4.  (a + c) > 15 || (b === "5" && c != 5)
5.  (a !== c) && !(b != "5")

1. true
2. false
3. true
4. true
5. true

Wah bhai — sab answers bilkul sahi hain! 👏
Result: 5/5 — Perfect! ✅
*/

/*
Question 2:

let score = 85;
let age = 19;

let result = score >= 90 
    ? "Grade A" 
    : score >= 80 
        ? age >= 18 
            ? "Grade B+ (Adult)" 
            : "Grade B+ (Minor)" 
        : score >= 70 
            ? "Grade C" 
            : "Fail";

Answer = "Grade B+ (Adult)"

Bilkul sahi Bhai — "Grade B+ (Adult)" hi output hai. ✅
*/

/*
Question 3:

let x = 10;
let y = 5;
let z = 15;

let output = x > y 
    ? y > z 
        ? "A" 
        : x > z 
            ? "B" 
            : "C" 
    : z > x 
        ? y > x 
            ? "D" 
            : "E" 
        : "F";

Answer = "C"

Bhai haan, tumhara "C" wala answer bilkul sahi hai. ✅
*/