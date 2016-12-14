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

let countIPs = 0;
input.forEach((line) =>{

	let brackets = line.match(bracketSplit);
	let valid = true;

	if (checkPattern(line)) {
		brackets.forEach((section) => {
			if (checkPattern(section)) valid = false;
		})
	}
	else valid = false;
	if (valid) countIPs++;

})

function checkShort(line){

	for (let i = 0; i < line.length; i++){
		if (line[i] === line[i + 2] && line[i] !== line[i + 1]) 
			return line[i] + line[i + 1] + line[i + 2];
	}

	return '';
}

let countSSL = 0;
input.forEach((line) =>{

	let brackets = line.match(bracketSplit);
	let noBrackets = line.replace(bracketSplit, '');
	let valid = true;

	let aba = checkShort(noBrackets);
	if (aba !=='') {
		brackets.forEach((section) => {
			// if (checkPattern(section)) valid = false;
			
		})
	}
	else valid = false;
	if (valid) countSSL++;

})



console.log(countIPs, countSSL);
