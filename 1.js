const numbers = [23,34,67,89,77];

/* in this way if u push number to numbers newNumbers will also get effected */
// const newNumbers =numbers;
/* if u want want a separate of of numbers for newNumbers then u can use spread  operator */

const newNumbers =[...numbers];
/* CREATE A NEW ARRAY FROM AN OLD ARRAY AND ADD AN ELEMENT */
const updateNumbers= [...numbers, 43,34]
numbers.push(76);
numbers.push(76);
numbers.push(76);

console.log(newNumbers)

console.log(numbers)