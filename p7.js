let input = require('./p7input');
let bracketSplit = /\[(.*?)\]/g; // to find anything inside brackets;

function checkPattern(line){

	for (let i = 0; i < line.length; i++){
		if (line[i] === line[i + 3] && line[i + 2] === line[i + 1]){
			if (line[i] !== line[i + 1]) return true;
		}
	}

	return false;
}

let count = 0;

input.forEach((line) =>{

	let brackets = line.match(bracketSplit);
	console.log(brackets);
	let valid = true;

	if (checkPattern(line)) {
		brackets.forEach((section) => {
			if (checkPattern(section)) valid = false;
		})
	}
	else valid = false;

	if (valid) count++;

})

console.log(count);
