//Declaration of basic salary. The individual's salary before deductions.
let basicSalary;

//Function for PAYE deductions 
const payeDeductions = function (basicSalary) {
    if (basicSalary > 800000){
        return basicSalary * 0.35;
    } else if (basicSalary >= 500001 && basicSalary <= 800000) {
        return basicSalary * 0.325;
    } else if (basicSalary >= 32334 && basicSalary <= 500000) {
        return basicSalary * 0.325;
    } else if (basicSalary >= 24001 && basicSalary <= 32333) {
        return basicSalary * 0.325;
    } else if (basicSalary <= 24000) {
        return basicSalary * 0.1;
    } else return 'Input Basic Salary'
}

//Function to calculate SHIF as NHIF is not valid anymore
const shifDeductions = function (basicSalary){
   return basicSalary * 0.0275;
}


//Function to calculate NSSF
const nssfDeductionsTier1 = function (basicSalary){
   if (basicSalary <= 7000) {
    return basicSalary * 0.06;
   } else{
    return 0;
   }
};
const nssfDeductionsTier2 = function (basicSalary) {
    if (basicSalary>= 7001 && basicSalary <= 36000) {
        return basicSalary * 0.06;
    } else {
        return 0; 
    }
};

//test case for salary of 100000
basicSalary = 100000

const totalDeductions = payeDeductions(basicSalary) + nssfDeductionsTier2(basicSalary) + shifDeductions(basicSalary);

//calculate net salary
const netSalary = basicSalary - totalDeductions;

//dispaly net salary
console.log("Net salary:" + netSalary);
