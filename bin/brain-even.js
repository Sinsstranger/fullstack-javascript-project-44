#!/usr/bin/env node

import genQuestion from '../src/games/brain-even.js';
import startGame from '../src/index.js';

startGame('Answer "yes" if the number is even, otherwise answer "no".', genQuestion);
