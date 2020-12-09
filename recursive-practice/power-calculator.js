// Recursive practice: Power Calculator.

const powerCalculator = (base, power) => {
  if (power < 0) {
    return "Invalid input. Exponent cannot be negative.";
  } else if (power === 0) {
    return 1;
  } else {
    return power === 1 ? base : powerCalculator(base + base, power - 1);
  }
};

// Testing...

console.log(powerCalculator(2, 8));
