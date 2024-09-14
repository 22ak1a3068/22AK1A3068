const fs = require('fs');

// Function to read and reverse the first 'n' characters of a file
function readAndReverse(filePath, numChars) {
    // Read the file content asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        // Extract the first 'n' characters
        const textToReverse = data.slice(0, numChars);
        
        // Reverse the extracted text
        const reversedText = textToReverse.split('').reverse().join('');
        
        // Display the reversed text
        console.log('Reversed Text:', reversedText);
    });
}

// Example usage
const filePath = 'example.txt'; // Replace with your file path
const numChars = 50; // Number of characters to read from the file
readAndReverse(filePath, numChars);
