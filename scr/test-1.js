const invertCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result +=
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
};

export default invertCase;
