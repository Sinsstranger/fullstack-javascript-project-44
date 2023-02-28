import { cons } from '@hexlet/pairs';

export default () => {
  const signs = ['+', '-', '*'];
  const number1 = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const sign = Math.round(Math.random() * 2);

  let correctAns = 0;
  if (signs[sign] === '+') {
    correctAns = number1 + number2;
  } else if (signs[sign] === '-') {
    correctAns = number1 - number2;
  } else {
    correctAns = number1 * number2;
  }

  return cons(`${number1} ${signs[sign]} ${number2}`, correctAns.toString());
};
