/* 
**Day 2:**  
- String methods (`slice`, `substring`, `replace`, `split`, `toUpperCase`)  
- **Mini Task:** Create a string and apply 5 string methods
*/

// .....................  Methods .....................
// ........ slice() : Used to get a specific part of a string
// .slice( start index, end index), index starts from 0, character on end index will not be included

let slicing = "Israr Ahmad"
console.log(slicing.slice(6, 11)); // Ahmad
console.log(slicing.slice(6)); // Ahmad
console.log(slicing.slice(6, slicing.length)); // Ahmad
console.log(slicing.slice(-5)); // // "Ahmad" (counts from end) --- starts from slicing.length-5 --> end

// Use .slice() when you need to handle negative indices (counting from the end).

// ........ substring() : Used to get a specific part of a string
let substr = "Hello, World!"
console.log(substr.substring(0, 5)); // "Hello"
console.log(substr.substring(7));    // "World!"
console.log(substr.substring(-3));   // "Hello, World!" (negative becomes 0)
console.log(substr.substring(5, 1)); // "ello" (swaps to (1, 5))

// Use .substring() when you want automatic swapping of start and end (but beware of negative values being treated as 0).

// Feature	            .slice()	                    .substring()
// Negative Index	    Counts from end	                Treated as 0
// start > end	        Returns ""	                    Swaps arguments
// Mutability	        Doesn't modify original	        Doesn't modify original
// NaN Handling	        Treated as 0	                Treated as 0


// .........  replace() : Used to replace a specific portion with another something other
let replacing = "Israr Ahmad"
console.log(replacing.replace("A", 'I'));
console.log(replacing.replace("Ahmad", 'Afridi'));
console.log(replacing.replace("Ahmad", true));
console.log(replacing.replace("Ahmad", 10));


// .........  split() : Used to replace a specific portion with another something other
let spliting = "Israr Ahmad"
console.log(spliting.split("Atal"));

// .........  toUpperCase()
let capital = "Israr Ahmad"
console.log(capital.toUpperCase());
