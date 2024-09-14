function printAllSubstrings(input) {
    // Get the length of the input string
    const length = input.length;
    
    // Iterate through each possible starting position
    for (let start = 0; start < length; start++) {
        // Iterate through each possible ending position
        for (let end = start + 1; end <= length; end++) {
            // Extract the substring and print it
            const substring = input.substring(start, end);
            console.log(substring);
        }
    }
}

// Example usage
const myString = "abc";
printAllSubstrings(myString);
