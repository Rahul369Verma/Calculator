// import Big from 'big.js';

export default function operate(
  numberOne: string,
  numberTwo: string,
  operation: string
) {
  // const one = Big(numberOne);
  // const two = Big(numberTwo);
  let tempOne = parseFloat(numberOne);
  let tempTwo = parseFloat(numberTwo);
  if (operation === "+") {
    return (tempOne + tempTwo).toString();
  }
  if (operation === "-") {
    return (tempOne - tempTwo).toString();
  }
  if (operation === "x") {
    return (tempOne * tempTwo).toString();
  }
  if (operation === "÷") {
    try {
      return (tempOne / tempTwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === "%") {
    try {
      const temp = (tempOne % tempTwo).toString();
      return temp === "NaN" ? "0" : temp;
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
