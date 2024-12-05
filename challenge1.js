// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to determine the grade based on marks
function studentGrade() {
    // Prompt the user to enter marks
    rl.question('Enter student marks (0-100): ', (input) => {
        const marks = parseInt(input); // Convert input string to a number

        // Validate the input to ensure it's within the valid range
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Invalid input. Please enter a number between 0 and 100.');
        } else if (marks > 79) {
            console.log('Grade: A');
        } else if (marks >= 60) { // No need to re-check <= 79 since earlier conditions exclude higher values
            console.log('Grade: B');
        } else if (marks >= 50) {
            console.log('Grade: C');
        } else if (marks >= 40) {
            console.log('Grade: D');
        } else {
            console.log('Grade: E');
        }

        rl.close(); // Close the interface after processing
    });
}

// Call the function to start the program
studentGrade();