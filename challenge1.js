// Function to calculate a grade based on the score
function calculateGrade(grades) {
    // Check if the grade is greater than 79
    if (grades > 79) {
        return "A"; // If greater than 79, return grade "A"
    }
    // Check if the grade is between 60 and 79 (inclusive of 60)
    else if (grades >= 60) {
        return "B"; // If between 60 and 79, return grade "B"
    }
    // Check if the grade is between 50 and 59 (inclusive of 50)
    else if (grades >= 50) {
        return "C"; // If between 50 and 59, return grade "C"
    }
    // Check if the grade is between 40 and 49 (inclusive of 40)
    else if (grades >= 40) {
        return "D"; // If between 40 and 49, return grade "D"
    }
    // If the grade is below 40
    else {
        return "E"; // Return grade "E"
    }
}

// Example usage of the calculateGrade function
const grade = calculateGrade(70); // Input score of 70
console.log(grade); // Output the grade to the console
