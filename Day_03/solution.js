// This is my solution for the first problem of day 3 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/3/input

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

const rucksacks = readFile('Day_03/input.txt');

let totalScore = 0;

rucksacks.reduce((acc, curr) => {
	const item1 = curr.slice(0, curr.length / 2);
	const item2 = curr.slice(curr.length / 2, curr.length);

	for (let i = 0; i < item1.length; i++) {
		if (item2.includes(item1[i])) {
			if (item1[i].toLowerCase() === item1[i]) {
				totalScore += item1[i].charCodeAt(0) - 96;
				break;
			} else {
				totalScore += item1[i].charCodeAt(0) - 38;
				break;
			}
		}
	}
}, 0);

console.log({ totalScore });

// Problem 2
let newTotalScore = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
	const elf1 = rucksacks[i];
	const elf2 = rucksacks[i + 1];
	const elf3 = rucksacks[i + 2];

	for (let j = 0; j < elf1.length; j++) {
		if (elf2.includes(elf1[j]) && elf3.includes(elf1[j])) {
			if (elf1[j].toLowerCase() === elf1[j]) {
				newTotalScore += elf1[j].charCodeAt(0) - 96;
				break;
			} else {
				newTotalScore += elf1[j].charCodeAt(0) - 38;
				break;
			}
		}
	}
}

console.log({ newTotalScore });
