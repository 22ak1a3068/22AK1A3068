// Define a ComplexNumber class
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Add two complex numbers
    add(other) {
        return new ComplexNumber(
            this.real + other.real,
            this.imaginary + other.imaginary
        );
    }

    // Subtract another complex number from this one
    subtract(other) {
        return new ComplexNumber(
            this.real - other.real,
            this.imaginary - other.imaginary
        );
    }

    // Multiply this complex number by another one
    multiply(other) {
        return new ComplexNumber(
            this.real * other.real - this.imaginary * other.imaginary,
            this.real * other.imaginary + this.imaginary * other.real
        );
    }

    // Get the conjugate of this complex number
    conjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }

    // String representation for easy output
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// Example usage:
const num1 = new ComplexNumber(4, 5); // 4 + 5i
const num2 = new ComplexNumber(1, 2); // 1 + 2i

console.log("Number 1:", num1.toString());
console.log("Number 2:", num2.toString());

const sum = num1.add(num2);
const difference = num1.subtract(num2);
const product = num1.multiply(num2);
const conjugate1 = num1.conjugate();
const conjugate2 = num2.conjugate();

console.log("Sum:", sum.toString());
console.log("Difference:", difference.toString());
console.log("Product:", product.toString());
console.log("Conjugate of Number 1:", conjugate1.toString());
console.log("Conjugate of Number 2:", conjugate2.toString());
