//  STACK MEMORY (For Primitive Types)

// Stack ek fast memory area hoti hai jahan simple values store hoti hain.
// In values ko directly copy kia jata hai, reference nahi diya jata.
// Primitive types → String, Number, Boolean, Null, Undefined, BigInt, Symbol

let a = 10; // Stored in Stack (simple value)
let b = a; // A new copy is made
b++;

console.log(a, b); // 10, 11
// English: Each variable has its own separate copy.
// Roman Urdu: Har variable ki apni copy hoti hai, ek change hone se doosra change nahi hota.

//  HEAP MEMORY (For Non-Primitive Types)

// Heap wo jagah hoti hai jahan complex data structures store hote hain.
// Non-Primitive types → Object, Array, Function
// Ye values reference ke zariye store hoti hain (address hold karti hain).

let person1 = { name: "Ali" }; // Object stored in Heap
let person2 = person1; // Reference of same object (not a copy)
person2.name = "Zaid";

console.log(person1.name); // "Zaid"
// English: Both variables point to the same memory location.
// Roman Urdu: Dono variables ek hi address pe point kar rahe hain, isliye dono ka data same hai.

//  STACK VS HEAP DIFFERENCE SUMMARY

// 1. Stack holds simple primitive data.
// 2. Heap holds complex reference data.
// 3. Stack copies values directly.
// 4. Heap stores memory reference (address).
// 5. Stack is faster and small.
// 6. Heap is larger but slower.
// 7. Changing one Stack variable doesn’t affect another.
// 8. Changing one Heap reference affects all pointing variables.

//  EXAMPLE COMPARISON

// Stack Example
let x = 5;
let y = x;
y++;
console.log(x, y); // 5, 6
// Roman Urdu: x aur y ki apni apni copy hai.
// English: x and y have their own independent copies.

// Heap Example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
// Roman Urdu: arr1 aur arr2 dono ek hi jagah ka reference le rahe hain.
// English: arr1 and arr2 share the same reference in memory.

//  VISUAL IDEA (Imagine like this)

/*
Stack Memory:
--------------
| a = 10 |
| b = 10 | (separate copy)

Heap Memory:
-------------
Object {name: "Ali"}
person1 → reference
person2 → same reference

So when one changes, both reflect that change.
*/

//  SHORT SUMMARY

// Stack → Primitive types (values are copied)
// Heap → Non-primitive types (references are shared)
// Stack → Fast, Small
// Heap → Large, Slower
// Primitive change → Independent
// Reference change → Shared effect
