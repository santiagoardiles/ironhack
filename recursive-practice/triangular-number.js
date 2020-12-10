// Recursive practice: Nth Triangular Number.

const dreieckszahl = (n) => (n === 1 ? 1 : dreieckszahl(n - 1) + n);

// Testing.

console.log(dreieckszahl(6)); // 21
console.log(dreieckszahl(7)); // 28
console.log(dreieckszahl(8)); // 36
console.log(dreieckszahl(9)); // 45
console.log(dreieckszahl(120)); // 7260
