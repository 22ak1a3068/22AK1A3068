// Function to read a 10-digit integer from the user
function read10DigitInteger(promptMessage) {
    let input;
    do {
        input = prompt(promptMessage);
    } while (!/^\d{10}$/.test(input)); // Validate input to ensure it is a 10-digit integer
    return parseInt(input, 10);
}

// Get two 10-digit integers from the user
const num1 = read10DigitInteger("Enter the first 10-digit integer:");
const num2 = read10DigitInteger("Enter the second 10-digit integer:");

// Perform relational operations
console.log(`First Number: ${num1}`);
console.log(`Second Number: ${num2}`);

console.log(`Is the first number equal to the second number? ${num1 === num2}`);
console.log(`Is the first number not equal to the second number? ${num1 !== num2}`);
console.log(`Is the first number greater than the second number? ${num1 > num2}`);
console.log(`Is the first number less than the second number? ${num1 < num2}`);
console.log(`Is the first number greater than or equal to the second number? ${num1 >= num2}`);
console.log(`Is the first number less than or equal to the second number? ${num1 <= num2}`);
