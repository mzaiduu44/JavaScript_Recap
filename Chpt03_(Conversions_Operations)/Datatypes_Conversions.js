//.......Conversions.........//

// String → Number (Converts numeric string into a real number)
let a = "123";
let num1 = Number(a);
console.log(num1, typeof num1); // 123 number

// Number → String (Converts number into a string form)
let b = 456;
let str1 = String(b);
console.log(str1, typeof str1); // "456" string

// Boolean → Number (true becomes 1, false becomes 0)
let c = true;
let num2 = Number(c);
console.log(num2, typeof num2); // 1 number

// Number → Boolean (0 becomes false, any other number becomes true)
let d = 0;
let bool1 = Boolean(d);
console.log(bool1, typeof bool1); // false boolean

// String → Boolean (empty string = false, non-empty = true)
let e = "";
let bool2 = Boolean(e);
console.log(bool2, typeof bool2); // false boolean

// Boolean → String (true/false changes into text form)
let f = false;
let str2 = String(f);
console.log(str2, typeof str2); // "false" string

// Null / Undefined → Number (null = 0, undefined = NaN)
let g = null;
let h;
console.log(Number(g)); // 0
console.log(Number(h)); // NaN (Not a Number)

// Automatic Type Conversion (JS converts types automatically)
console.log("5" + 2); // "52" (+ joins string & number as string)
console.log("5" - 2); // 3 (- forces both to number for subtraction)
console.log(5 + true); // 6 (true becomes 1 and added to 5)

// BigInt Conversion (used for very large integers)
let big = BigInt(1234567890123456);
console.log(big, typeof big); // 1234567890123456n "bigint"

//...........Operations............//

// + adds two numbers
let sum = 3;
let finalVal = 2;
console.log(sum + finalVal); // Ans will be 5

// Number(true) = 1, then + adds numbers
let count = 12;
let updatedCount = Number(true) + 1;
console.log(updatedCount); // Ans will be 2

// * multiplies two numbers
let product = 2 * 4;
console.log(product); // Ans will be 8

// - subtracts second number from first
let diffrence = 0 - 1;
console.log(diffrence); // Ans will be -1

// / divides first number by second
let division = 50 / 10;
console.log(division); // Ans will be 5

// % gives remainder after division
let modulus = 10 % 5;
console.log(modulus); // Ans will be 0, It is also called remainder

// Post Increment (increases value by 1 after using it)
let incraseVal = null;
incraseVal++; // null = 0 → 1
incraseVal++; // 1 → 2
console.log(incraseVal); // 2

// Pre Increment (increases value by 1 before using it)
++incraseVal; // 2 → 3
++incraseVal; // 3 → 4
console.log(incraseVal); // 4

// + inside () runs first, then string + joins as text
let val1 = 1;
let val2 = "2";
let val3 = 3;
console.log(val2 + (val1 + val3)); // "2" + 4 = "24"

// true = 1, Number(true) converts it
let test = Number(true);
console.log(test); // 1
test++; // increases by 1 (1 → 2)
console.log(test); // 2
