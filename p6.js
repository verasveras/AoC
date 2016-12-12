let input = require('./p6input');
let counts = [{}, {}, {}, {}, {}, {}, {}, {}];

function addToCounts(char, position){
	console.log(position);
	let count = counts[position];
	count[char] = count[char] ? count[char] + 1 : 1;
	console.log(counts);
}


function findMaxChar(position){

	let obj = counts[position];
	console.log(obj);
	let max = 0;
	let char = '';

	for (var chars in obj){
		if (obj[chars] > max){
			max = obj[chars];
			char = chars;
		}
	}
	
	return char;
}

input.forEach((line) => {
	console.log(line);
	line = line.split('');
	line.forEach(addToCounts);
	console.log(counts);
})

let string = '';

for (let i = 0; i < 6; i++){
	string += findMaxChar(i);
}


console.log(string);







