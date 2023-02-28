import { cons } from '@hexlet/pairs';

export default () => {
  const number = Math.round(Math.random() * 100);
  let correctAns = '';
  if (number % 2 === 0) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }

  return cons(number, correctAns);
};
