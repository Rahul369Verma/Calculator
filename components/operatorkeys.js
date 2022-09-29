/*eslint-disable*/
import React from 'react';

const OperatorKeys = (props) => {
  const { handleClick } = props;
  return (
    <>
      <button type="button" className="btn-cal btn-top" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" className="btn-cal btn-top" onClick={() => handleClick('CE')}>CE</button>
      <button type="button" className="btn-cal btn-top" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" className="btn-cal btn-top" onClick={() => handleClick('%')}>%</button>
      <button type="button" className="btn-cal btn-side" onClick={() => handleClick('÷')}>÷</button>
      <button type="button" className="btn-cal btn-side" onClick={() => handleClick('x')}>x</button>
      <button type="button" className="btn-cal btn-side" onClick={() => handleClick('-')}>-</button>
      <button type="button" className="btn-cal btn-side" onClick={() => handleClick('+')}>+</button>
      <button type="button" className="btn-cal btn-side" onClick={() => handleClick('=')}>=</button>
    </>
  );
};
export default OperatorKeys;
