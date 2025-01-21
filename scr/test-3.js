const isPerfect = (num) => {
  let result = 1;
  for (let i = 2; i <= Math.ceil(num / 2); i += 1) {
    result += num % i === 0 ? i : 0;
  }
  return num === result;
};

export default isPerfect;
