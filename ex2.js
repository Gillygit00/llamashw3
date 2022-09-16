const student = prompt("Please enter your name.")
  alert(`Hello ${student}`)

const grade = prompt("How many college units have you completed?")
if (grade > 0 && grade <= 30) {
  console.log(`Your grade standing is Freshman.`);
}
else if (grade >= 31 && grade <= 60) {
  console.log(`Your grade standing is Sophmore.`);
}
else if (grade >= 61 && grade <= 90) {
  console.log(`Your grade standing is Junior.`);
}
else if (grade >= 91) {
  console.log(`Your grade standing is Senior.`);
}
else (grade === String || grade < 0) 
  console.log(`Invalid input! ${grade} is not an adequate input.`);

