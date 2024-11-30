function calculateGrade(grades) {
if (grades  >79) {
    return "A";
}
else if (grades >= 60) {
    return "B";
}
else if (grades >= 59) {
    return "C";
}
else if (grades >=40) {
    return "D";
}
else  {
return "E";
}
}
const grade = calculateGrade (70);
console.log(grade);
