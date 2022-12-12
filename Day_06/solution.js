// This is my solution for the first problem of day 6 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/6/input

const { readFileSync } = require('fs');

function readFile(filename) {
	try {
		const contents = readFileSync(filename, 'utf-8').trimEnd();
		return contents;
	} catch (err) {
		console.log(err);
	}
}

const signal = readFile('Day_06/input.txt');

console.log({ signal });

let signalArr = [];

for (let i = 0; i < signal.length; i++) {
	if (!signalArr.includes(signal[i])) {
		signalArr.push(signal[i]);
	} else {
		const index = signalArr.indexOf(signal[i]);
		console.log({ index });
		for (let j = 0; j <= index; j++) {
			signalArr.shift();
		}
		signalArr.push(signal[i]);
	}
	console.log({ signalArr });
	if (signalArr.length === 4) {
		let indexOfMarker = i + 1;
		console.log({ indexOfMarker });
		break;
	}
}

// Problem 2
let messageArr = [];

for (let i = 0; i < signal.length; i++) {
	if (!signalArr.includes(signal[i])) {
		signalArr.push(signal[i]);
	} else {
		const index = signalArr.indexOf(signal[i]);
		console.log({ index });
		for (let j = 0; j <= index; j++) {
			signalArr.shift();
		}
		signalArr.push(signal[i]);
	}
	console.log({ signalArr });
	if (signalArr.length === 14) {
		let indexOfMarker = i + 1;
		console.log({ indexOfMarker });
		break;
	}
}
