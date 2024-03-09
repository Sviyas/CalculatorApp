/* eslint-disable react/prop-types */
import '../App.css';
import processMathOperatiosn from './functions';

const InputSelections = ({ onChangeValue, list, onAnswer }) => {
  /**
   * @param {textContent} data Updating into parent State
   */
  const getInputValues = data => {
    onChangeValue(data);
  };

  /**
   * @returns Calculate and update to parent states
   */
  const calculate = () => {
    const result = processMathOperatiosn(list);

    // ? update the answer on parent state
    onAnswer(result);
  };

  return (
    <div className='inputF'>
      <div className='box' id='pattern' onClick={e => getInputValues(e.target.textContent)}>
        C
      </div>
      <div className='box' id='pattern' onClick={e => getInputValues(e.target.textContent)}>
        Del
      </div>
      <div className='box' id='pattern' onClick={e => getInputValues(e.target.textContent)}>
        %
      </div>
      <div className='box' id='calculations' onClick={e => getInputValues(e.target.textContent)}>
        /
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        7
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        8
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        9
      </div>
      <div className='box' id='calculations' onClick={() => getInputValues('*')}>
        X
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        4
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        5
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        6
      </div>
      <div className='box' id='calculations' onClick={e => getInputValues(e.target.textContent)}>
        -
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        1
      </div>

      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        2
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        3
      </div>
      <div className='box' id='calculations' onClick={e => getInputValues(e.target.textContent)}>
        +
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        0
      </div>
      <div className='box' id='numbers' onClick={e => getInputValues(e.target.textContent)}>
        .
      </div>
      <div className='box' id='calculations' onClick={e => getInputValues(e.target.textContent)}>
        &radic;
      </div>
      <div className='box' id='calculations' onClick={() => calculate()}>
        =
      </div>
    </div>
  );
};

export default InputSelections;
