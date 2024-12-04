// Net Salary Calculator
function calculateNetSalary() {
    const basicSalary = Number(prompt("Input your basic salary: ")); // Input: Basic Salary,making it a number
    const benefits = Number(prompt("Input your benefits: "));    // Input: Benefits,making it a number 

    // Define KRA Tax Brackets from 1 July 2023:
    const taxBrackets = [
        { upperLimit: 24000, rate: 0.1 },   // 10% for income up to 24,000
        { upperLimit: 32333, rate: 0.25 },  // 25% for income between 24,001 and 32,333
        { upperLimit: 500000, rate: 0.3 },  //30% for income between 32,334 - 500,000
        { upperLimit: 800000, rate: 0.325 },//32.5% for income between 500,001 - 800,000
        { upperLimit: Infinity, rate: 0.35 } // 35% for income above 800,000
    ];

    // NHIF Deduction Table
    const nhifRates = [
        { upperLimit: 5999, deduction: 150 },
        { upperLimit: 7999, deduction: 300 },
        { upperLimit: 11999, deduction: 400 },
        { upperLimit: 14999, deduction: 500 },
        { upperLimit: 19999, deduction: 600 },
        { upperLimit: 24999, deduction: 750 },
        { upperLimit: 29999, deduction: 850 },
        { upperLimit: 34999, deduction: 900 },
        { upperLimit: 39999, deduction: 950 },
        { upperLimit: 44999, deduction: 1000 },
        { upperLimit: 49999, deduction: 1100 },
        { upperLimit: 59999, deduction: 1200 },
        { upperLimit: 69999, deduction: 1300 },
        { upperLimit: 79999, deduction: 1400 },
        { upperLimit: 89999, deduction: 1500 },
        { upperLimit: 99999, deduction: 1600 },
        { upperLimit: Infinity, deduction: 1700 }
    ];

    // NSSF Deduction Rate (6% of basic salary capped at 36,000)
    const nssfRate = 0.06;
    const nssfMaxLimit = 36000;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let taxableIncome = grossSalary;
    let payee = 0;

    for (const bracket of taxBrackets) {
        if (taxableIncome > bracket.upperLimit) {
            payee += bracket.upperLimit * bracket.rate;
            taxableIncome -= bracket.upperLimit;
        } else {
            payee += taxableIncome * bracket.rate;
            break;
        }
    }

    // Calculate NHIF Deduction
    const nhifDeduction = nhifRates.find(rate => grossSalary <= rate.upperLimit).deduction;

    // Calculate NSSF Deduction
    const nssfDeduction = Math.min(basicSalary * nssfRate, nssfMaxLimit * nssfRate);

    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    // Output Results
    return {
        grossSalary: grossSalary.toFixed(2),
        payee: payee.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}


const result = calculateNetSalary();
console.log("Gross Salary: KES", result.grossSalary);
console.log("PAYE (Tax): KES", result.payee);
console.log("NHIF Deduction: KES", result.nhifDeduction);
console.log("NSSF Deduction: KES", result.nssfDeduction);
console.log("Net Salary: KES", result.netSalary);