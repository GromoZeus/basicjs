const fizzBuzz = (begin, end) => {
  let count;
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      count = 'FizzBuzz';
    } else if (i % 3 === 0) {
      count = 'Fizz';
    } else if (i % 5 === 0) {
      count = 'Buzz';
    } else {
      count = i;
    }
    console.log(count);
  }
};

export default fizzBuzz;
