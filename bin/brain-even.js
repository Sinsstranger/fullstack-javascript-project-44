#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { EOL } from 'os';
import helloUser from '../src/cli.js';

const isEvenInAnswer = (num) => (num % 2 ? 'no' : 'yes');
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const playGame = () => {
	let correctAnswersCount = 0;
	const userName = helloUser();
	const answersCollection = {
		startMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
		askQuestion: 'Question: ',
		correctAnswer: 'Correct!',
	};
	console.log(answersCollection.startMessage);
	while (correctAnswersCount < 3) {
		const answeredNum = getRndInteger(1, 100);
		const userAnswer = readlineSync.question(`${answersCollection.askQuestion}${answeredNum}`).trim();
		const realAnswer = isEvenInAnswer(answeredNum);
		if (userAnswer === realAnswer) {
			correctAnswersCount++;
			console.log(correctAnswersCount < 3 ? `${answersCollection.correctAnswer}` : `${answersCollection.correctAnswer}${EOL}Congradulations, ${userName}`);
		} else {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.${EOL}Let's try again, ${userName}!`);
			break;
		}
	}
};
playGame();
