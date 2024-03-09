/**
 * @param {number} a
 * @param {number} b
 * @param {string} pattern
 * @returns Returns the Answers
 */
const basicArithmeticCalculations = (a, b, pattern) => {
  let result = null;

  switch (pattern) {
    case '+':
      result = a + b;
      break;

    default:
      console.log('assign bodmas functions');
  }

  return result;
};

/**
 * @param {Array<string>} input List of calculations arr
 * @returns Calculate and returns the answers
 */
const processMathOperatiosn = input => {
  try {
    // ? set the default values
    if (input?.length === 0 || input === undefined) return 0;

    const patterns = ['+', '-', '*', '/', '%'];

    // ? identify the pattern
    const fetchCalcPattern = input.filter(e => patterns.includes(e));

    // ? if the inputs are bodmas contains
    if (fetchCalcPattern.length > 1) {
      console.log('BoadMas theorm need to implemented');
    } else {
      // ? extract the input values using pattern
      const [num1, num2] = input.join('').split(fetchCalcPattern[0]);

      return basicArithmeticCalculations(Number(num1), Number(num2), fetchCalcPattern[0]);
    }
  } catch (error) {
    console.log('Failed to Calculate it ', error);
    return error;
  }
};

export default processMathOperatiosn;
