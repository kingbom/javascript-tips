const numbers = [1, 5, 9, 7, 3, 8];
const sum = numbers.reduce((total, value) => total + value, 0);
const evens = numbers.filter((value) => value % 2 === 0);
const square = numbers.map((value) => value **2);