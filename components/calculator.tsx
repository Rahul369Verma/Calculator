// import { render } from '@testing-library/react';
import React, { useState } from "react";
import DisplayScreen from "./displayScreen";
import NumericKeys from "./numericKeys";
import OperatorKeys from "./operatorkeys";
import calculate from "./logic/calculate";

const Calculator = () => {
  type ofItem = {
    total: string | null;
    next: string | null;
    operation: string | null;
  };

  type UserData = {
    obj: ofItem;
  };

  const [state, setState] = useState<UserData>({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (value: string) => {
    const { obj } = state;
    const temp: ofItem = calculate(obj, value);
    setState({ obj: temp });
  };

  // const handleNumberClick = (event, value) => {
  //   const { obj } = state;
  //   const temp = calculate(obj, value);
  //   console.log(temp);
  //   setState({ obj: temp });
  // };

  const { obj } = state;
  const { total, next, operation } = obj;
  return (
    <div className="calc-container">
      <DisplayScreen next={next} total={total} operation={operation} />
      <OperatorKeys handleClick={handleClick} />
      <NumericKeys handleClick={handleClick} />
    </div>
  );
};
export default Calculator;
