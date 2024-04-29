
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter(function (number) {
  return number % 2 === 1
})

console.log(filteredNumbers); // return odd Numbers