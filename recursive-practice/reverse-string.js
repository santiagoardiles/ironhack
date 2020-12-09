// Recursive practice: Reverse string.

const reverse = (str) =>
  str.length < 1 ? "" : str.slice(-1) + reverse(str.slice(0, -1));

// Testing.

console.log(reverse("Santiago"));
