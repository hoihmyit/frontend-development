// Function sample
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3)); // 5

// Scope sample
let globalVariable = "This is a global variable";

function scopeSample() {
  let localVariable = "This is a local variable";

  console.log(globalVariable); // This is a global variable
  console.log(localVariable); // This is a local variable
}
scopeSample();
console.log(globalVariable); // This is a global variable
console.log(localVariable); // ReferenceError: localVariable is not defined
