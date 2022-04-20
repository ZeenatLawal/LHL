const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  let min = numbers[0];
  numbers.forEach(number => {
    if (number < min) {
      min = number;
    }
  });
  return min;
};
module.exports = min;
