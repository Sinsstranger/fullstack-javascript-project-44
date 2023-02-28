#!/usr/bin/env node

import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (description, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);
  let correct = 0;

  while (correct < 3) {
    const questionPair = getQuestion();
    const question = car(questionPair);
    const correctAns = cdr(questionPair);

    console.log(`Question: ${question}`);
    const userAns = readlineSync.question('Your answer: ');

    if (correctAns === userAns) {
      correct += 1;
      console.log('Correct!');
    } else {
      console.log(`Your answer: '${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
