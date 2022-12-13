// This is my solution for the first problem of day 7 of Advent of Code 2022
// Code Written in JavaScript
// https://adventofcode.com/2022/day/7/input

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

const commands = readFile('Day_07/input.txt');

let fileSystem = {};
let currentDir = [];
let totalSize = 0;

//create a tree

commands.reduce((acc, curr) => {
	if (curr[0] === '$') {
		const commandArr = curr.split(' ');
		const command = commandArr[1];
		let dirName;
		if (command === 'cd') {
			if (commandArr[2] === '..') {
				currentDir.pop();
			} else {
				dirName = commandArr[2];
				currentDir.push(dirName);
				const path = currentDir.join('/');
				fileSystem[path] = {};
				fileSystem[path].size = 0;
			}
		}
	} else {
		const listArr = curr.split(' ');
		if (listArr[0] === 'dir') return;
		else {
			totalSize += parseInt(listArr[0]);
			const fileName = listArr[1];
			fileSystem[currentDir] = {
				...fileSystem[currentDir],
				[fileName]: listArr[0],
			};
			const temp = [];
			currentDir.forEach((dir) => {
				temp.push(dir);
				const temp2 = temp.join('/');
				fileSystem[temp2].size += parseInt(listArr[0]);
			});
		}
	}
}, 0);

let sum = 0;

for (file in fileSystem) {
	if (fileSystem[file].size <= 100000) {
		sum += fileSystem[file].size;
	}
	console.log({ sum });
}

const diskSpace = 70000000;

// delete a directory to make 30000000 space
const sizeRequired = fileSystem['/'].size - diskSpace + 30000000;
let closest = 70000000;
for (file in fileSystem) {
	if (fileSystem[file].size >= sizeRequired) {
		if (fileSystem[file].size < closest) {
			closest = fileSystem[file].size;
		}
	}
}

// 70000000 - 30000000 = 40000000

console.log({ closest });

console.log({ sum });

console.log({ fileSystem });
