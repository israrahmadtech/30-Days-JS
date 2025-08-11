// Variables: Containers that store data values
// Data Type: The specific kind of value a variable can hold (e.g. Number, String, Boolean, etc.)

// Some Common Data Types: 
// N (Number), N (Null), B (Boolean), B (BigInt), S (String), S (Symbol), U (Undefined)

// let age = 18;               // Number
// let email = null;           // Null (intentional absence of any value)
// let bigNumber = 1234567890123456789012345678901234567890n; // BigInt (correct syntax uses 'n' at the end) , must be whole number, can't be decimal numbers
// let isLoggedIn = false;     // Boolean
// let name = "Israr";         // String
// let symbol = Symbol("id");  // Symbol
// let username;               // Undefined (declared but not assigned)

// ✅ 1. Variable Scoping in JavaScript (var, let, const)

// 🔹 var – Function Scoped
// var a = 10;
// function general(){
//     var a = 20
//     console.log(a) // 20
// }
// general()
// console.log(a) // 10

// 🔍 Breakdown:

    // var a = 10;
    //     // Global scope mein variable a bana aur usmein 10 assign hua.

    // function general() { var a = 20; }
    //     // Jab general() call hota hai, us function ke andar naya a create hota hai.
    //     // Yeh a = 20 sirf function ke andar valid hai — yeh function-scoped hai.

    // console.log(a); // inside the function
    //     // Yeh a refer karta hai function ke andar wale a = 20 ko.
    //     // ✅ Output: 20

    // console.log(a); // outside the function
    //     // Yeh a refer karta hai global scope wale a = 10 ko.
    //     // ✅ Output: 10

// 🔑 Function Scope Ka Rule:
//     Jo variable var keyword ke sath function ke andar banaya jaye, wo sirf usi function ke andar access ho sakta hai. Bahar se us tak koi access nahi hota.

// 🧠 Is concept ko samajhne ke baad aapko yeh baat clear honi chahiye:
//     Jab bhi kisi function ke andar koi variable declare hota hai (var, let, const se), wo function ke bahar se alag hota hai, even agar naam same ho.

//     Jo variable aap function ke andar declare karte ho (chahe var, let, ya const ho),
//     uska scope sirf us function tak hota hai — uske bahar koi us variable ko na dekh sakta hai, na use kar sakta hai.

// To Simple Alfaaz Mein:
//     "Function ke ander jo cheez banti hai, wo sirf function ki apni duniya (scope) tak limited hoti hai."
//     Bahar se na usko dekha ja sakta hai, na access kiya ja sakta hai.

// 🧪 Example:

// function greet() {
//   let name = "Israr";
//   console.log("Hello", name); // ✅ Works here
// }

// greet();

// console.log(name); // ❌ Error: name is not defined
//     // Kyun error aaya? Kyun ke name sirf function greet() ke andar zinda hai. Bahar uska koi wajood hi nahi.
