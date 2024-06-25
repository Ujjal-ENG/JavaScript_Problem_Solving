function positionInverse(nums) {
    let numStr = nums.toString();
    let length = numStr.length;
    let positionsWithValues = [];
    let newPositionWithValues = new Array(length);
    
    // Extract digits and their positionsWithValues from the number
    for (let i = length - 1; i >= 0; i--) {
        let digit = parseInt(numStr[i]);
        positionsWithValues.push(digit, length - i);
    }
    
    // // Initialize the new array to store values at their new positions
    // let newPositionArray = new Array(length);

    // // Place digits at their correct positions
    for (let i = 0; i < positionsWithValues.length; i += 2) {
        let pos = positionsWithValues[i];
        let value = positionsWithValues[i + 1];
        newPositionWithValues[pos-1] = value;
    }

    // // Join the array into a string to get the final result
    let result = newPositionWithValues.reverse().join('');

    return result;
}

console.log(positionInverse(21453)); // Output: 23154
