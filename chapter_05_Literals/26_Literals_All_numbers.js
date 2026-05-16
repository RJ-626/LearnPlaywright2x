// JavaScript Number Literals - All Types with Examples

// 1. Decimal Integers (Base 10)
let age = 25;
let temperature = -10;
let year = 2024;
console.log("Decimal:", age, temperature, year);

// 2. Binary Integers (Base 2) - prefix 0b or 0B
let binaryFive = 0b101;       // 5 in decimal
let binaryTen = 0B1010;       // 10 in decimal
console.log("Binary 0b101:", binaryFive);
console.log("Binary 0B1010:", binaryTen);

// 3. Octal Integers (Base 8) - prefix 0o or 0O
let octalEight = 0o10;        // 8 in decimal
let octalSixtyThree = 0O77;   // 63 in decimal
console.log("Octal 0o10:", octalEight);
console.log("Octal 0O77:", octalSixtyThree);

// 4. Hexadecimal Integers (Base 16) - prefix 0x or 0X
let hexTwoFiveFive = 0xFF;    // 255 in decimal
let hexOneZeroTwoFour = 0x400; // 1024 in decimal
console.log("Hex 0xFF:", hexTwoFiveFive);
console.log("Hex 0x400:", hexOneZeroTwoFour);

// 5. Floating-Point Literals
let pi = 3.14159;
let negativeFloat = -0.5;
let leadingDecimal = 0.75;
let trailingDecimal = 5.0;
console.log("Float pi:", pi);
console.log("Float -0.5:", negativeFloat);
console.log("Float 0.75:", leadingDecimal);
console.log("Float 5.0:", trailingDecimal);

// 6. Exponential / Scientific Notation
let million = 1e6;            // 1 * 10^6 = 1000000
let tiny = 1e-3;              // 1 * 10^-3 = 0.001
let avogadro = 6.022e23;
console.log("Exponential 1e6:", million);
console.log("Exponential 1e-3:", tiny);
console.log("Exponential 6.022e23:", avogadro);

// 7. BigInt Literals - suffix n (for arbitrarily large integers)
let bigNumber = 9007199254740993n;
let anotherBig = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
console.log("BigInt type:", typeof bigNumber);

// 8. Number Separators (Underscores) - ES2021 for readability
let readableMillion = 1_000_000;
let readableBinary = 0b1010_1010;
let readableHex = 0xFF_FF;
console.log("Separator 1_000_000:", readableMillion);
console.log("Separator 0b1010_1010:", readableBinary);
console.log("Separator 0xFF_FF:", readableHex);

// 9. Special Numeric Values
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log("Infinity:", positiveInfinity);
console.log("-Infinity:", negativeInfinity);
console.log("NaN:", notANumber);

// 10. typeof check for numbers
console.log("typeof 42:", typeof 42);
console.log("typeof 3.14:", typeof 3.14);
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof NaN:", typeof NaN); // "number" (special case)
console.log("typeof 123n:", typeof 123n); // "bigint"

