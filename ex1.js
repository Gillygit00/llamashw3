const user = prompt("Enter a number between 1 - 100:");
if (user > 1 && user < 100 ) {
  console.log(`Thank you! You entered ${user}, a valid number.`);
}
else {
  console.log(`Sorry, ${user} is not a valid entry.`);
}