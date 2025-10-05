//.......Conversions.........//

// String → Number
let a = "123";
let num1 = Number(a);
console.log(num1, typeof num1); // 123 number

// Number → String
let b = 456;
let str1 = String(b);
console.log(str1, typeof str1); // "456" string

// Boolean → Number
let c = true;
let num2 = Number(c);
console.log(num2, typeof num2); // 1 number

// Number → Boolean
let d = 0;
let bool1 = Boolean(d);
console.log(bool1, typeof bool1); // false boolean

// String → Boolean
let e = "";
let bool2 = Boolean(e);
console.log(bool2, typeof bool2); // false boolean

// Boolean → String
let f = false;
let str2 = String(f);
console.log(str2, typeof str2); // "false" string

// Null / Undefined → Number
let g = null;
let h;
console.log(Number(g)); // 0
console.log(Number(h)); // NaN

// Automatic Type Conversion
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(5 + true); // 6

// BigInt Conversion
let big = BigInt(1234567890123456);
console.log(big, typeof big); // 1234567890123456n "bigint"

//...........Operations............//

let sum = 3;
let finalVal = 2;
console.log(sum + finalVal);

let count = 12;
let updatedCount = Number(true) + 1;
console.log(updatedCount);
