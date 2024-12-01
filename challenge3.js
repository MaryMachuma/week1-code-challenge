function calculateNetSalary(basicSalary, benefits) {
    
    const grossSalary = basicSalary + benefits;

    
    const calculatePAYE = (gross) => {
        if (gross <= 24000) {
            return gross * 0.1; 
        } else if (gross <= 32333) {
            return 2400 + (gross - 24000) * 0.25; 
        } else {
            return 2400 + 2083.25 + (gross - 32333) * 0.3;
        }
    };

    const payee = calculatePAYE(grossSalary);

    
    const calculateNHIF = (gross) => {
        if (gross <= 5999) return 150;
        if (gross <= 7999) return 300;
        if (gross <= 11999) return 400;
        if (gross <= 14999) return 500;
        if (gross <= 19999) return 600;
        if (gross <= 24999) return 750;
        if (gross <= 29999) return 850;
        if (gross <= 34999) return 900;
        if (gross <= 39999) return 950;
        if (gross <= 44999) return 1000;
        if (gross <= 49999) return 1100;
        if (gross <= 59999) return 1200;
        if (gross <= 69999) return 1300;
        if (gross <= 79999) return 1400;
        if (gross <= 89999) return 1500;
        if (gross <= 99999) return 1600;
        return 1700; 
    };

    const nhif = calculateNHIF(grossSalary);

    
    const calculateNSSF = (gross) => {
    
        return Math.min(gross * 0.06, 1080);
    };

    const nssf = calculateNSSF(grossSalary);

    
    const netSalary = grossSalary - payee - nhif - nssf;

    
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary,
    };
}


const basicSalary = 50000; 
const benefits = 10000; 
const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", result.grossSalary);
console.log("PAYE (Tax):", result.payee);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);
