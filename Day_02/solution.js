// This is my solution for the first problem of day 2 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/2/input

const { readFileSync } = require('fs');

function readFile(filename) {
	try {
		const contents = readFileSync(filename, 'utf-8').trimEnd();
		const arr = contents.split('\n');
		return arr;
	} catch (err) {
		console.log(err);
	}
}

const turns = readFile('Day_02/input.txt');

let totalScore = 0;

turns.reduce((acc, curr) => {
	let [elfTurn, myTurn] = curr.split(' ');

	myTurn === 'X' && elfTurn === 'A'
		? (totalScore += 3 + 1)
		: myTurn === 'X' && elfTurn === 'B'
		? (totalScore += 0 + 1)
		: myTurn === 'X' && elfTurn === 'C'
		? (totalScore += 6 + 1)
		: totalScore;

	myTurn === 'Y' && elfTurn === 'A'
		? (totalScore += 6 + 2)
		: myTurn === 'Y' && elfTurn === 'B'
		? (totalScore += 3 + 2)
		: myTurn === 'Y' && elfTurn === 'C'
		? (totalScore += 0 + 2)
		: totalScore;

	myTurn === 'Z' && elfTurn === 'A'
		? (totalScore += 0 + 3)
		: myTurn === 'Z' && elfTurn === 'B'
		? (totalScore += 6 + 3)
		: myTurn === 'Z' && elfTurn === 'C'
		? (totalScore += 3 + 3)
		: totalScore;
}, 0);

console.log({ totalScore });

//13809

//Problem 2
let newTotalScore = 0;

turns.reduce((acc, curr) => {
	let [elfTurn, myTurn] = curr.split(' ');

	elfTurn === 'A' && myTurn === 'X'
		? (newTotalScore += 3 + 0)
		: elfTurn === 'A' && myTurn === 'Y'
		? (newTotalScore += 1 + 3)
		: elfTurn === 'A' && myTurn === 'Z'
		? (newTotalScore += 2 + 6)
		: newTotalScore;

	elfTurn === 'B' && myTurn === 'X'
		? (newTotalScore += 1 + 0)
		: elfTurn === 'B' && myTurn === 'Y'
		? (newTotalScore += 2 + 3)
		: elfTurn === 'B' && myTurn === 'Z'
		? (newTotalScore += 3 + 6)
		: newTotalScore;

	elfTurn === 'C' && myTurn === 'X'
		? (newTotalScore += 2 + 0)
		: elfTurn === 'C' && myTurn === 'Y'
		? (newTotalScore += 3 + 3)
		: elfTurn === 'C' && myTurn === 'Z'
		? (newTotalScore += 1 + 6)
		: newTotalScore;
}, 0);

console.log({ newTotalScore });
