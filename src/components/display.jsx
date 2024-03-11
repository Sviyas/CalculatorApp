/* eslint-disable react/prop-types */
import '../App.css';

export default function Display({ value, answers }) {
  if (value.length > 0 && value.includes('x2')) {
    value.pop();
  }

  // ? default value
  const answer = answers ?? 0;
  return (
    <div className='display'>
      <div className='inputValue'>{value.join('')}</div>
      <div className='answer'>{answer}</div>
    </div>
  );
}
