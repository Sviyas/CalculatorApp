import Display from './display';
import '../App.css';
import InputSelections from './pattern';
import { useState } from 'react';
import onDelete from './events';
import { basicArithmeticCalculations } from './functions';

/**
 * @returns Mainn Components of Calculators
 */
export default function CalculatorApp() {
  // ? users inputs store memory
  const [input, setInput] = useState([]);

  const [answer, setAnswers] = useState(0);

  /**
   * @param {Array<string>} value
   * @returns Get Input Values Update to the state
   */
  const displayedValue = value => {
    //

    // C = DeleteALL  , if contains delete all the inputs
    if (value === 'C') {
      setInput([]);
      setAnswers();

      return;
    }

    // Del = Delete Last , if contains remove the last elements
    if (value === 'Del') {
      const result = onDelete(input);

      //  update the new rows
      setInput([...result]);

      return;
    }

    // if sequare root is contains
    if (value === 'x2') {
      // ? validating the square root
      const sequareRt = input.join('');

      const sqRoot = basicArithmeticCalculations(sequareRt, '', 'x2');

      setAnswers(sqRoot);
    }

    // Display the Values
    setInput([...input, value]);
  };

  /**
   * @param {number | string} data
   * @description Update the Answers from Child Components
   */
  const getAnswers = data => {
    setAnswers(data);
  };

  return (
    <div className='calc '>
      <Display value={input} answers={answer} />
      <InputSelections onChangeValue={displayedValue} list={input} onAnswer={getAnswers} />
    </div>
  );
}
