// Recursive practice: Counting Sheep.

const sheepCounter = (n) => {
  if (n < 1) {
    return `${n}: Another sheep jumps over the fence.`;
  } else {
    console.log(`${n}: Another sheep jumps over the fence.`);
    return sheepCounter(n - 1);
  }
};

// Testing...

console.log(sheepCounter(5));
