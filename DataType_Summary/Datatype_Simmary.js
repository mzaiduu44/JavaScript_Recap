//JavaScript Data Types & Comparison Summary

//PRIMITIVE TYPES
// These store single simple values (immutable)

let str = "Hello"; // String → text value
let num = 123; // Number → any numeric value (int/float)
let bool = true; // Boolean → true / false
let n = null; // Null → empty or nothing
let u = undefined; // Undefined → variable declared but no value
let big = 1234567890n; // BigInt → for very big numbers
let sym = Symbol("id"); // Symbol → unique value always different

// Example:
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof n); // object (weird JS bug 🤷‍♂️)
console.log(typeof u); // undefined
console.log(typeof big); // bigint
console.log(typeof sym); // symbol

//NON-PRIMITIVE TYPES (REFERENCE TYPES)
// These store references (addresses) of values in memory

let arr = [1, 2, 3]; // Array → list of values
let obj = { name: "Zaid" }; // Object → key:value pairs
let func = function () {
  // Function → reusable code block
  return "Hello!";
};

// Example:
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof func); // function

//DIFFERENCE
// Primitive → copied by VALUE
// Non-Primitive → copied by REFERENCE

let a = 10;
let b = a;
b++;
console.log(a, b); // 10, 11 (separate copies)

let obj1 = { x: 5 };
let obj2 = obj1;
obj2.x++;
console.log(obj1.x, obj2.x); // 6, 6 (same memory reference)

// COMPARISON

// 🟢 Normal Numbers
console.log(2 > 1); // true
console.log(2 == "2"); // true (loose check → converts types)
console.log(2 === "2"); // false (strict check → no conversion)

// 🟡 null & undefined
console.log(null == undefined); // true (same "empty" type loosely)
console.log(null === undefined); // false (diff data types)
console.log(null > 0); // false (converted to 0, not greater)
console.log(null >= 0); // true (0 >= 0)
console.log(undefined > 0); // false (undefined → NaN)
console.log(undefined == 0); // false (not equal to anything)

// 🧩 Symbol comparison
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 == s2); // false (each symbol is unique)
console.log(s1 === s2); // false

// OPERATIONS SUMMARY
// ➕ Addition / Concatenation
console.log(5 + 2); // 7
console.log("5" + 2); // "52" (string + number → string)

// ➖ Subtraction
console.log("5" - 2); // 3 (string converted to number)

// ✖ Multiplication
console.log("2" * "3"); // 6

// ➗ Division
console.log(10 / 2); // 5

// % Modulus → remainder
console.log(10 % 3); // 1

// ++ Post / Pre Increment
let inc = 0;
console.log(inc++); // 0 (then add)
console.log(++inc); // 2 (add then show)

// Boolean with Numbers
console.log(true + 1); // 2
console.log(false + 5); // 5

// Null & Undefined with Numbers
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

//========= SUMMARY IN SHORT =========//

/*
✅ Primitive → string, number, boolean, null, undefined, bigint, symbol
✅ Non-Primitive → object, array, function
✅ == → loose equality (type conversion)
✅ === → strict equality (no conversion)
✅ null == undefined → true
✅ null >= 0 → true  (converted to 0)
✅ undefined → always false in numeric compare
✅ Symbol → always unique
✅ Object copied by reference, primitive by value
*/
