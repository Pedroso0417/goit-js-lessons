/* 
Example 3 - Operators Priority

Disassemble operators priority in the variable value assignment instruction result.

const result = 108 + 223 - 2 * 5;
console.log(result); 
*/

// PEMDAS
// PARENTHESIS, EXPONENTS, MULTIPLY, DIVISION, ADD, SUBTRACT
const result = 108 + (223 - 2) * 5;
console.log(result);
