const solution = (num) => {
  const str = Math.abs(num).toString();
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = str[i] + result;
  }
  return num < 0 ? Number(`-${result}`) : Number(result);
};

export default solution;
