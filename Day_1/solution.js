// This is my solution for the first problem of day 1 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/1/input

const { readFileSync } = require('fs');

function readFile(filename) {
	try {
		const contents = readFileSync(filename, 'utf-8').trimEnd();
		const arr = contents.split('\n\n');
		return arr;
	} catch (err) {
		console.log(err);
	}
}
const calories = readFile('Day_1/day-01-input.txt');

let eachElfCals = [];
for (let i = 0; i < calories.length; i++) {
	let arr = calories[i].split('\n');
	const sum = arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
	eachElfCals.push(sum);
}

//Problem 1
const highestCals = Math.max(...eachElfCals);
console.log({ highestCals });

//Problem 2
const sumOfTopThree = eachElfCals
	.sort((a, b) => b - a)
	.slice(0, 3)
	.reduce((a, b) => a + b, 0);
console.log({ sumOfTopThree });
