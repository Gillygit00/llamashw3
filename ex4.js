let num1 = parseInt( prompt ("Inpupt a number"));
let num2 = parseInt( prompt ("Input another number."));

if (num1||num2 !== isNumber) {
  alert("Invalid input");
}

const sum = num1 + num2
const subtraction = num1 - num2
const multiplication = num1 * num2
const division = num1 / num2
const modulo = num1 % num2


console.log(`${sum}`);
console.log(`${subtraction}`);
console.log(`${multiplication}`);
console.log(`${division}`);
console.log(`${modulo}`);

alert (`The following mathematical operations for the numbers entered are addition:${sum}, subtraction:${subtraction}, multiplication:${multiplication}, division:${division}, and modulo:${modulo}. `);
