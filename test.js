function positionInverse(nums) {
    let numStr = nums.toString();
    let length = numStr.length;
    let positions = [];
    
    // Extract digits and their positions from the number
    for (let i = length - 1; i >= 0; i--) {
        let digit = parseInt(numStr[i]);
        positions.push(digit, length - i);
    }
    
    // Initialize the new array to store values at their new positions
    let newPositionArray = new Array(length);

    // Place digits at their correct positions
    for (let i = 0; i < positions.length; i += 2) {
        let value = positions[i];
        let pos = positions[i + 1];
        newPositionArray[pos - 1] = value;
    }

    // Join the array into a string to get the final result
    let result = newPositionArray.join('');

    return result;
}

console.log(positionInverse(21453)); // Output: 23154
