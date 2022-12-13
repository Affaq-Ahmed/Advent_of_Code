// This is my solution for the first problem of day 8 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/8/input

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

const gridOfTrees = readFile('Day_08/input.txt');

let visibleTrees = 0;

// Part 1
for (let i = 0; i < gridOfTrees.length; i++) {
	for (let j = 0; j < gridOfTrees[i].length; j++) {
		if (
			i === 0 ||
			j === 0 ||
			i === gridOfTrees.length - 1 ||
			j === gridOfTrees[i].length - 1
		) {
			visibleTrees++;
		} else {
			if (
				i === 1 &&
				j === 1 &&
				(gridOfTrees[i][j] > gridOfTrees[i - 1][j] ||
					gridOfTrees[i][j] > gridOfTrees[i][j - 1])
			) {
				visibleTrees++;
			} else if (
				i === 1 &&
				j === gridOfTrees[i].length - 2 &&
				(gridOfTrees[i][j] > gridOfTrees[i - 1][j] ||
					gridOfTrees[i][j] > gridOfTrees[i][j + 1])
			) {
				visibleTrees++;
			} else if (
				i === gridOfTrees.length - 2 &&
				j === 1 &&
				(gridOfTrees[i][j] > gridOfTrees[i + 1][j] ||
					gridOfTrees[i][j] > gridOfTrees[i][j - 1])
			) {
				visibleTrees++;
			} else if (
				i === gridOfTrees.length - 2 &&
				j === gridOfTrees[i].length - 2 &&
				(gridOfTrees[i][j] > gridOfTrees[i + 1][j] ||
					gridOfTrees[i][j] > gridOfTrees[i][j + 1])
			) {
				visibleTrees++;
			} else {
				let notVisibleTop = false;
				let notVisibleBottom = false;
				let notVisibleLeft = false;
				let notVisibleRight = false;

				for (let k = 0; k < i; k++) {
					if (gridOfTrees[i][j] <= gridOfTrees[k][j]) {
						notVisibleTop = true;
						break;
					}
				}
				for (let k = i + 1; k < gridOfTrees.length; k++) {
					if (gridOfTrees[i][j] <= gridOfTrees[k][j]) {
						notVisibleBottom = true;
						break;
					}
				}
				for (let k = 0; k < j; k++) {
					if (gridOfTrees[i][j] <= gridOfTrees[i][k]) {
						notVisibleLeft = true;
						break;
					}
				}
				for (let k = j + 1; k < gridOfTrees[i].length; k++) {
					if (gridOfTrees[i][j] <= gridOfTrees[i][k]) {
						notVisibleRight = true;
						break;
					}
				}
				if (
					!notVisibleTop ||
					!notVisibleBottom ||
					!notVisibleLeft ||
					!notVisibleRight
				) {
					visibleTrees++;
				}
			}
		}
	}
}
console.log({ visibleTrees });

// Part 2
let highestScenicPoint = [];

for (let i = 0; i < gridOfTrees.length; i++) {
	for (let j = 0; j < gridOfTrees[i].length; j++) {
		if (
			i === 0 ||
			j === 0 ||
			i === gridOfTrees.length - 1 ||
			j === gridOfTrees[i].length - 1
		) {
			highestScenicPoint.push(0);
		} else {
			let visibleTreesTop = 0;
			let visibleTreesBottom = 0;
			let visibleTreesLeft = 0;
			let visibleTreesRight = 0;
			for (let k = i - 1; k >= 0; k--) {
				visibleTreesTop++;
				if (gridOfTrees[i][j] <= gridOfTrees[k][j]) {
					break;
				}
			}
			for (let k = i + 1; k < gridOfTrees.length; k++) {
				visibleTreesBottom++;
				if (gridOfTrees[i][j] <= gridOfTrees[k][j]) {
					break;
				}
			}
			for (let k = j - 1; k >= 0; k--) {
				visibleTreesLeft++;
				if (gridOfTrees[i][j] <= gridOfTrees[i][k]) {
					break;
				}
			}
			for (let k = j + 1; k < gridOfTrees[i].length; k++) {
				visibleTreesRight++;
				if (gridOfTrees[i][j] <= gridOfTrees[i][k]) {
					break;
				}
			}
			highestScenicPoint.push(
				visibleTreesTop *
					visibleTreesBottom *
					visibleTreesLeft *
					visibleTreesRight
			);
		}
	}
}

console.log({ highestScenicPoint: Math.max(...highestScenicPoint) });
