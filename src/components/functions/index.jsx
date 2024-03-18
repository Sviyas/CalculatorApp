import * as math from 'mathjs';

const bodmas = input => {
  const expressions = input.join('');

  // console.log('expressions :>> ', expressions);

  const result = math.evaluate(expressions);
  try {
    if (result) {
      return result;
    }

    if (!result) {
      const pattern = ['+', '-', '*', '/'];

      const newVal = input.filter(va => {
        return pattern.includes(va);
      });

      const rmVal = newVal.slice(0, newVal.length - 1);
      console.log(rmVal);

      const exactPattern = input.filter(p => {
        const rmPatterns = rmVal.includes(p);
        if (!rmPatterns) return p;
      });

      const result = Math.floor(math.evaluate(exactPattern.join('')));

      console.log('result :>> ', result);
    }
  } catch (error) {
    console.log('error  on bodmas:>> ', error.message);
    return null;
  }
};

/**
 * @param {number} a
 * @param {number} b
 * @param {string} pattern
 * @returns Returns the Answers
 */
export const basicArithmeticCalculations = (a, b, pattern) => {
  let result = null;

  switch (pattern) {
    case '+':
      result = Math.floor(a + b);
      break;
    case '-':
      result = Math.floor(a - b);
      break;
    case '*':
      result = Math.floor(a * b);
      break;
    case '/':
      result = Math.floor(a / b);
      break;
    case 'x2':
      result = Math.floor(a * a);
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

    const patterns = ['+', '-', '*', '/'];

    // ? identify the pattern
    const fetchCalcPattern = input.filter(e => patterns.includes(e));

    // ? if the inputs are bodmas contains
    if (fetchCalcPattern.length > 1) {
      return bodmas(input);
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
