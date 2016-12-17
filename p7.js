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

	let posibilities = []

	for (let i = 0; i < line.length; i++){
		if (line[i] === line[i + 2] && line[i] !== line[i + 1]) 
			posibilities.push(line[i] + line[i + 1] + line[i + 2]);
	}

	return posibilities;
}


let countSSL = 0;
input.forEach((line) =>{

	let valid = false;
	console.log(line);
	let brackets = line.match(bracketSplit);
	let noBrackets = line.replace(bracketSplit, '');
	console.log(noBrackets);

	let abaPossibilities = checkShort(noBrackets);

	if (abaPossibilities.length) {
		abaPossibilities.forEach(function(aba){

			let bab = aba[1] + aba[0] + aba[1];
			brackets.forEach((section) => {
				if (section.indexOf(bab) !== -1) {
					valid = true;
				}
			})
		})
	}
	if (valid) countSSL++;

})

console.log(countIPs, countSSL);
