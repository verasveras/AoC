let input = require('./p8input');
const fs = require('fs');

let screen = [];

for (let i = 0; i < 6; i++){
	screen.push([]);
	for (let j = 0; j < 50; j++){
		screen[i].push('.');
	}
}

function countPixels(){
	let count = 0; 

	for (let i = 0; i < 6; i++){
		for (let j = 0; j < 50; j++){
			if (screen[i][j] === '#') count++;
		}
	}

	return count;
}

function makeRect(x, y){
	for (let i = 0; i < y; i++){
		for (let j = 0; j < x; j++){
			screen[i][j] = '#';
		}
	}
}

function rotateColumn(columnA, b){

	let column = [];
	for (let i = 0; i < 6; i++){
		column.push(screen[i][columnA]);
	}

	let length = column.length;
	column = column.slice(length - b).concat(column.slice(0, length - b));

	for (let i = 0; i < 6; i++){
		screen[i][columnA] = column[i];
	}

}

function rotateRow(rowA, b){

	let length = screen[rowA].length;
	screen[rowA] = screen[rowA].slice(length - b).concat(screen[rowA].slice(0, length - b));

}


input.forEach((line) => {

	line = line.split(' ');
	let command = line[0];

	switch (command){

	case 'rect':

		let [x, y] = line[1].split('x');
		makeRect(x, y);
		break;

	case 'rotate':
		let b = line[4]
		let a = line[2].split('=')[1];
		if (line[1] == 'column') rotateColumn(a, b);
		else rotateRow(a, b);

		break;

	default:
		console.log('Wot');
	}


})

let newScreen = screen.join('\n')
fs.writeFileSync('p8output.js', newScreen , 'utf8');
console.log(countPixels());
// console.log(screen);