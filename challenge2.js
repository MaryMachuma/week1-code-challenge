// Function to calculate speeding points and determine consequences
function carSpeed(speed) {
    // Check if the speed is less than the speed limit (70)
    if (speed < 70) {
        return "Ok"; // If speed is within the limit, return "Ok"
    }

    // Calculate the number of points based on how much the speed exceeds the limit
    const count = Math.floor((speed - 70) / 5); // Each 5 mph over the limit is 1 point

    // Check if the points exceed 12, which means the license is suspended
    if (count > 12) {
        return "License suspended"; // If points are greater than 12, return this message
    }

    // If points are within the allowable range, return the points
    return `Points: ${count}`;
}

// Example usage of the carSpeed function
const result = carSpeed(85); // Input speed of 85 mph
console.log(result); // Output the result to the console
