#!/usr/bin/env node

import genQuestion from '../src/games/brain-gcd.js';
import startGame from '../src/index.js';

startGame('Find the greatest common divisor of given numbers.', genQuestion);
