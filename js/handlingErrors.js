function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Error: Cannot divide by zero");
  }
  return number1 / number2;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message); // Error: Cannot divide by zero
}
