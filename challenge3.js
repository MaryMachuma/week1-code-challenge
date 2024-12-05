const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * 0.1; // 10% tax for income <= 24,000
    } else if (grossSalary <= 32333) {
        return 2400 + (grossSalary - 24000) * 0.25; // 25% tax for income between 24,001 and 32,333
    } else {
        return 4483.25 + (grossSalary - 32333) * 0.3; // 30% tax for income > 32,333
    }
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    const pensionablePay = Math.min(grossSalary, 18000); // Maximum pensionable salary for NSSF is 18,000
    return pensionablePay * 0.06; // 6% contribution
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - (payee + nhif + nssf);

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary,
    };
}

// Main function to interact with the user
rl.question('Enter your basic salary: ', (basicInput) => {
    const basicSalary = parseFloat(basicInput);

    rl.question('Enter your benefits: ', (benefitInput) => {
        const benefits = parseFloat(benefitInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log('Invalid input. Please enter numeric values.');
        } else {
            const { grossSalary, payee, nhif, nssf, netSalary } = calculateNetSalary(basicSalary, benefits);

            console.log(`\n--- Salary Breakdown ---`);
            console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
            console.log(`PAYE (Tax): ${payee.toFixed(2)}`);
            console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
            console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
            console.log(`Net Salary: ${netSalary.toFixed(2)}`);
        }

        rl.close(); // Close the interface
    });
});