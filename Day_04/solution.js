// This is my solution for the first problem of day 4 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/4/input

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

const pairs = readFile('Day_04/input.txt');

let fullyContainingPairs = 0;

pairs.reduce((acc, curr) => {
	let [firstPair, secondPair] = curr.split(',');

	let [firstPairDigit1, firstPairDigit2] = firstPair.split('-');
	let [secondPairDigit1, secondPairDigit2] = secondPair.split('-');

	if (
		parseInt(firstPairDigit1) <= parseInt(secondPairDigit1) &&
		parseInt(firstPairDigit2) >= parseInt(secondPairDigit2)
	) {
		fullyContainingPairs++;
	} else if (
		parseInt(secondPairDigit1) <= parseInt(firstPairDigit1) &&
		parseInt(secondPairDigit2) >= parseInt(firstPairDigit2)
	) {
		fullyContainingPairs++;
	}
}, 0);

console.log({ fullyContainingPairs });

// Problem 2
let partiallyContainingPairs = 0;

pairs.reduce((acc, curr) => {
	let [firstPair, secondPair] = curr.split(',');

	let [firstPairDigit1, firstPairDigit2] = firstPair.split('-');
	let [secondPairDigit1, secondPairDigit2] = secondPair.split('-');

	if (
		parseInt(firstPairDigit1) <= parseInt(secondPairDigit1) &&
		parseInt(firstPairDigit2) >= parseInt(secondPairDigit1)
	) {
		partiallyContainingPairs++;
	} else if (
		parseInt(secondPairDigit1) <= parseInt(firstPairDigit1) &&
		parseInt(secondPairDigit2) >= parseInt(firstPairDigit1)
	) {
		partiallyContainingPairs++;
	} else if (
		parseInt(firstPairDigit1) <= parseInt(secondPairDigit2) &&
		parseInt(firstPairDigit2) >= parseInt(secondPairDigit2)
	) {
		partiallyContainingPairs++;
	} else if (
		parseInt(secondPairDigit1) <= parseInt(firstPairDigit2) &&
		parseInt(secondPairDigit2) >= parseInt(firstPairDigit2)
	) {
		partiallyContainingPairs++;
	}
}, 0);

console.log({ partiallyContainingPairs });
