// Function to find the pair of elements with the sum closest to zero
function findClosestPair(arr) {
    // Edge case: if the array has fewer than 2 elements, return null
    if (arr.length < 2) {
        return null;
    }

    // Sort the array
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    let closestSum = Infinity;
    let bestPair = [null, null];

    // Use two pointers to find the pair with the sum closest to zero
    while (left < right) {
        const sum = arr[left] + arr[right];

        // Check if this sum is closer to zero than the previous closestSum
        if (Math.abs(sum) < Math.abs(closestSum)) {
            closestSum = sum;
            bestPair = [arr[left], arr[right]];
        }

        // Move the pointers
        if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }

    return bestPair;
}

// Example usage
const array = [1, -3, 2, 5, -1, 4, 6, -2];
const pair = findClosestPair(array);

if (pair) {
    console.log(`The pair with the sum closest to zero is: (${pair[0]}, ${pair[1]})`);
} else {
    console.log("Array does not have enough elements.");
}
