
//student grade generator
function gradeGenerator() {
    //r1.question("Input student marks (0-100): ", (input) => {
        let input = prompt("Input your marks: ")
        let mark = Number(input);

        // Validate the input
        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            return gradeGenerator(); // Retry input
        }

        // Determine the grade
        let grade;
        if (mark > 79) {
            return "A";
        } else if (mark >= 60) {
            return "B";
        } else if (mark >= 50) {
            return"C";
        } else if (mark >= 40) {
            return"D";
        } else {
            return "E";
        }

        //console.log(`The student's grade is: ${grade}`);
        //r1.close(); 
    //});
}


console.log(gradeGenerator());
