import { cons } from '@hexlet/pairs';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }

  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    }

    i += 1;
  }

  return true;
};

export default () => {
  const number = Math.round(Math.random() * 100) + 1;
  let correctAns = '';
  if (isPrime(number)) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }

  return cons(number, correctAns);
};
