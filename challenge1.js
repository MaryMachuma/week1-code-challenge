//Import 'readline' module from Node.js to handle input and output in the VSCode terminal
import {createInterface} from 'readline';

function getGrade() {
    //Create interface (rl) for reading user input and outputting to the terminal
    const rl = createInterface({
        //Input will come from terminal (standard input), output will go to the terminal (standard output)
        input: process.stdin, output: process.stdout 
    });

    rl.question('Input student marks (0-100):', (input) => {
        //Parse the input to an integer max
        const marks = parseInt(input);

        if (marks >= 0 && marks <= 100) {
            //Determine grade using ternary operator
            const grade = marks > 79 ? 'A' : marks >= 60 ? 'B' : marks >= 50 ? 'C' : marks >= 40 ? 'D' : 'E';                    
            console.log(`${grade}`);
        } 
        else {
            console.log('Invalid input.');
        }
        //Close readline interface to end program
        rl.close();
    });
}

//Call function to execute program
getGrade();