// import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  // const one = Big(numberOne);
  // const two = Big(numberTwo);
  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);
  if (operation === '+') {
    return (numberOne + numberTwo).toString();
  }
  if (operation === '-') {
    return (numberOne - numberTwo).toString();
  }
  if (operation === 'x') {
    return (numberOne * numberTwo).toString();
  }
  if (operation === '÷') {
    try {
      return (numberOne / numberTwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      const temp = (numberOne % numberTwo).toString();
      return (temp === 'NaN' ? '0' : temp);
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
