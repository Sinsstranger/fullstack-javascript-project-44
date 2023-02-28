#!/usr/bin/env node

import genQuestion from '../src/games/brain-progression.js';
import startGame from '../src/index.js';

startGame('What number is missing in the progression?', genQuestion);
