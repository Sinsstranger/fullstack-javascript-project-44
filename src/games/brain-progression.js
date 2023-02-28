import { cons } from '@hexlet/pairs';

export default () => {
  const firstNumber = Math.round(Math.random() * 10);
  const add = Math.round(Math.random() * 10);

  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(firstNumber + add * i);
  }

  const hiddenIndex = Math.round(Math.random() * (arr.length - 1));
  const correctAns = arr[hiddenIndex];
  arr[hiddenIndex] = '..';

  return cons(arr.join(' '), correctAns.toString());
};
