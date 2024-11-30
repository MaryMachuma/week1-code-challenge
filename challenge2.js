function carSpeed(speed) {
    if (speed < 70) {
        return "Ok";
    }
    const count = Math.floor((speed - 70) / 5);
    if (count > 12) {
        return "License suspended";
    }
    return `Points: ${count}`;
}


const result = carSpeed(85); 
console.log(result);
