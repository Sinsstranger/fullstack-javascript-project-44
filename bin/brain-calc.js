#!/usr/bin/env node

import getQuestion from '../src/games/brain-calc.js';
import startGame from '../src/index.js';

startGame('What is the result of the expression?', getQuestion);
