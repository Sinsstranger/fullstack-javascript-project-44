import { cons } from '@hexlet/pairs';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const correctAns = gcd(number1, number2).toString();

  return cons(`${number1} ${number2}`, correctAns);
};
