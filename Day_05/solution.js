// This is my solution for the first problem of day 5 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/5/input

const { readFileSync } = require('fs');

function readFile(filename) {
	try {
		const contents = readFileSync(filename, 'utf-8').trimEnd();
		return contents;
	} catch (err) {
		console.log(err);
	}
}

const input = readFile('Day_05/input.txt');

const [lines, turns] = input.split('\n\n');

const data = lines.split('\n').slice(0, -1);

const matrix = data.map((row) => {
	let arr = [...row.matchAll(/[A-Z]|    ?/g)];
	return arr.map((el) => el[0]);
});

const transpose = (arr) => {
	let transposedArr = arr[0].map((_, i) => {
		return arr.map((row) => row[i]).reverse();
	});
	return transposedArr;
};

const stacks = transpose(matrix).map((row) => {
	return row.filter((el) => el !== '    ');
});

const stacks2 = transpose(matrix).map((row) => {
	return row.filter((el) => el !== '    ');
});

console.log({ stacks });

const moves = turns.split('\n').map((move) => {
	if (move === '') return;
	let arr = move.match(/move (\d+) from (\d+) to (\d+)/);
	return arr.slice(1, 4);
});

const makeMove = (stacks, move) => {
	const [num, from, to] = move;
	const fromStack = stacks[from - 1];
	const toStack = stacks[to - 1];
	const removed = fromStack.splice(-num).reverse();
	toStack.push(...removed);
};

const makeMove9001 = (stacks, move) => {
	const [num, from, to] = move;
	const fromStack = stacks[from - 1];
	const toStack = stacks[to - 1];
	const removed = fromStack.splice(-num);
	toStack.push(...removed);
};

moves.forEach((move) => {
	makeMove(stacks, move);
});

console.log('After moves:\n Problem1');

console.log({ stacks });

//problem 2

moves.forEach((move) => {
	makeMove9001(stacks2, move);
});

console.log('After moves:\n Problem2');

console.log({ stacks2 });
