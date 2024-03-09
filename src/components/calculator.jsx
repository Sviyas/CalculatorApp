import Display from './display';
import '../App.css';
import InputSelections from './pattern';
import { useState } from 'react';
import onDelete from './events';

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

      return;
    }

    // Del = Delete Last , if contains remove the last elements
    if (value === 'Del') {
      const result = onDelete(input);

      //  update the new rows
      setInput([...result]);

      return;
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
