const sumOfSquareDigits = (number) => {
    const str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
      sum += Math.pow(+str[i], 2);
    //   console.log(sum);
    }  
    return sum;
  };

const isHappyNumber = (number) => {
   let result = number;
   for (let i = 1; i <= 10; i += 1) {
        result += sumOfSquareDigits(result);
        // console.log(result);
        if (result === 1) return true;
    }
    return false;
};

export default isHappyNumber;