//Basic Comparisons

console.log(1 < 2); // true → 1 is smaller than 2
console.log(1 > 2); // false → 1 is not greater than 2
console.log(1 >= 2); // false → 1 is not greater or equal to 2
console.log(1 <= 2); // true → 1 is smaller or equal to 2
console.log(1 != 2); // true → 1 and 2 are not equal
console.log(2 == 2); // true → both values are equal
console.log(2 != 2); // false → both values are the same

//Null Comparison & Equality

// In equality check (==), null is not converted into a number
// null is only equal to undefined, not to any number
console.log(null == 0); // false → null is not equal to 0

// In comparison (<, >, <=, >=), JavaScript converts null into 0
// So (null <= 0) becomes (0 <= 0) → which is true
console.log(null <= 0); // true → 0 is equal to 0

// Here also null becomes 0, and (0 > 0) is false
console.log(null > 0); // false → 0 is not greater than 0

//Undefined Comparison & Equality

// Loose equality (==) → checks only value, not data type
// Both undefined and null represent “no value”, so ans is true
console.log(undefined == null); // true

// Strict equality (===) → checks both value and data type
// undefined → type is "undefined"
// null → type is "object"
console.log(undefined === null); // false

//Symbol comparision
let id = Symbol("Jinn");
let anothrId = Symbol("Jinn");
console.log(id == anothrId); //It'll always be unique to each other even the valu are save...
