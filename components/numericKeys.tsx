/*eslint-disable*/

import React, { FC, useEffect } from 'react';

const NumberKeys: FC<{ handleClick: (value: string) => void }>  = (props) => {


  const { handleClick } = props;

  useEffect(() => {
    const onScroll = (e: any) => {
      // e.preventDefault();
      if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6"
        || e.key === "7" || e.key === "8" || e.key === "9" || e.key === ".") {
        handleClick(e.key)
      }
    }
    window.addEventListener("keydown", onScroll);
    return function unMount() {
      window.removeEventListener("keydown", onScroll);
    };

  }, [handleClick]);

  

  return (
    <div className="numbers">
      <button type="button" data-testid="seven" className="btn-cal btn-primary" onClick={() => handleClick('7')}>7</button>
      <button type="button" data-testid="eight" className="btn-cal btn-primary" onClick={() => handleClick('8')}>8</button>
      <button type="button" data-testid="nine" className="btn-cal btn-primary" onClick={() => handleClick('9')}>9</button>
      <button type="button" data-testid="four" className="btn-cal btn-primary" onClick={() => handleClick('4')}>4</button>
      <button type="button" data-testid="five" className="btn-cal btn-primary" onClick={() => handleClick('5')}>5</button>
      <button type="button" data-testid="six" className="btn-cal btn-primary" onClick={() => handleClick('6')}>6</button>
      <button type="button" data-testid="one" className="btn-cal btn-primary" onClick={() => handleClick('1')}>1</button>
      <button type="button" data-testid="two" className="btn-cal btn-primary" onClick={() => handleClick('2')}>2</button>
      <button type="button" data-testid="three" className="btn-cal btn-primary" onClick={() => handleClick('3')}>3</button>
      <button type="button" data-testid="zero" className="btn-cal btn-primary col-span-2" onClick={() => handleClick('0')}>0</button>
      <button type="button" data-testid="full-stop" className="btn-cal btn-primary" onClick={() => handleClick(".")}>.</button>
    </div>
  );
}

export default NumberKeys;
