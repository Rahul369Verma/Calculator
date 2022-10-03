/*eslint-disable*/
import React, { FC, useEffect } from "react";

const OperatorKeys: FC<{ handleClick: (value: string) => void }> = (props) => {
  const { handleClick } = props;

  useEffect(() => {
    const onScroll = (e: any) => {
      // e.preventDefault();
      console.log(e.key);
      if (
        e.key === "%" ||
        e.key === "Backspace" ||
        e.key === "Enter" ||
        e.key === "/" ||
        e.key === "*" ||
        e.key === "-" ||
        e.key === "+" ||
        e.key === "="
      ) {
        if (e.key === "/") {
          handleClick("÷");
        } else if (e.key === "*") {
          handleClick("x");
        } else if (e.key === "Backspace") {
          handleClick("CE");
        } else if (e.key === "Enter") {
          handleClick("=");
        } else {
          handleClick(e.key);
        }
      }
    };
    window.addEventListener("keydown", onScroll);
    return function unMount() {
      window.removeEventListener("keydown", onScroll);
    };
  }, [handleClick]);

  return (
    <>
      <button
        type="button"
        className="btn-cal btn-top"
        onClick={() => handleClick("AC")}
      >
        AC
      </button>
      <button
        type="button"
        className="btn-cal btn-top"
        onClick={() => handleClick("CE")}
      >
        CE
      </button>
      <button
        type="button"
        className="btn-cal btn-top"
        onClick={() => handleClick("+/-")}
      >
        +/-
      </button>
      <button
        type="button"
        className="btn-cal btn-top"
        onClick={() => handleClick("%")}
      >
        %
      </button>
      <button
        type="button"
        className="btn-cal btn-side"
        onClick={() => handleClick("÷")}
      >
        ÷
      </button>
      <button
        type="button"
        className="btn-cal btn-side"
        onClick={() => handleClick("x")}
      >
        x
      </button>
      <button
        type="button"
        className="btn-cal btn-side"
        onClick={() => handleClick("-")}
      >
        -
      </button>
      <button
        type="button"
        className="btn-cal btn-side"
        onClick={() => handleClick("+")}
      >
        +
      </button>
      <button
        type="button"
        className="btn-cal btn-side"
        onClick={() => handleClick("=")}
      >
        =
      </button>
    </>
  );
};
export default OperatorKeys;
