// This is my solution for the first problem of day 9 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/9/input

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

const input = readFile('Day_09/input.txt');

let head = {
	x: 0,
	y: 0,
};

let tail = {
	x: 0,
	y: 0,
};

let visitedPositions = {
	head: {},
	tail: {},
};

function moveHead(direction) {
	switch (direction) {
		case 'U':
			head.y++;
			break;
		case 'D':
			head.y--;
			break;
		case 'R':
			head.x++;
			break;
		case 'L':
			head.x--;
			break;
	}
}

function moveTail() {
	let isDiagonal = head.x !== tail.x && head.y !== tail.y;
	if (head.x === tail.x && head.y === tail.y) {
		return;
	} else {
		if (head.x - tail.x > 1) {
			tail.x++;
			tail.y = isDiagonal ? head.y : tail.y;
			return;
		}
		if (head.x - tail.x < -1) {
			tail.x--;
			tail.y = isDiagonal ? head.y : tail.y;
			return;
		}
		if (head.y - tail.y > 1) {
			tail.y++;
			tail.x = isDiagonal ? head.x : tail.x;
		}
		if (head.y - tail.y < -1) {
			tail.y--;
			tail.x = isDiagonal ? head.x : tail.x;
		}
	}
}

const recordVisit = () => {
	visitedPositions.head[head.x + ',' + head.y] = true;
	visitedPositions.tail[tail.x + ',' + tail.y] = true;
};

input.forEach((instruction) => {
	const [direction, steps] = instruction.split(' ');
	for (let i = 0; i < steps; ++i) {
		recordVisit();
		moveHead(direction);
		moveTail();
		console.log({ head, tail });
	}
	recordVisit();
});

console.log(Object.keys(visitedPositions.tail).length);

// console.log(visitedPositions.tail);
