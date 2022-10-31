import readlineSync from 'readline-sync';
import {EOL} from 'os';

const helloUser = () => {
	console.log(`brain-games${EOL}Welcome to the Brain Games!`);
	const name = readlineSync.question(`May I have your name?${EOL}`);
	console.log(`Hello, ${name}!`);
}
export default helloUser;