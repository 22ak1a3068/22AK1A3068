// Function to count occurrences of each character in a given number
function countCharacterOccurrences(number) {
    // Convert number to string to process each character
    const numStr = number.toString();
    
    // Create an object to store character counts
    const count = {};

    // Loop through each character in the string
    for (let char of numStr) {
        // If the character is already in the count object, increment its count
        if (count[char]) {
            count[char]++;
        } else {
            // Otherwise, initialize its count to 1
            count[char] = 1;
        }
    }

    return count;
}

// Example usage
const number = prompt("Enter a number to count character occurrences:");
if (number !== null) {
    const occurrences = countCharacterOccurrences(number);
    console.log("Character occurrences in the number:");
    console.log(occurrences);
}
