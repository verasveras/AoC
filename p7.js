let input = require('./p7input');


// function checkFour(string){

// 	if (string.length < 4) return false;
// 	if (string[0] === string[3] && string[1] === string[2]){
// 		if (string[0] !== string[1]) return true;
// 	}
// 	return false;
// }


// function checkString(string){

// 	for (let i = 0; i < string.length; i++){
// 		let slice = string[i] + string[i+1] + string[i+2] + string[i+3];
// 		if (checkString(slice)) return true;
// 	}
// 	return false;

// }


// function checkBrackets(matches){

// 	let seenPattern = false;
// 	matches.forEach((match) =>{
// 		if (checkString(match)) seenPattern = true;
// 	})
// 	return seenPattern;

// }


let count = 0;
// let re = /\[(.*?)\]/g;

input.forEach((line) => {

	let re = /\[(.*?)\]/g;
	let matches = line.match(re);

	// there are no patterns in the matches so those 
	if (!checkBrackets(matches)){

	}
	// console.log(matches);
	// checkBrackets(line);


})

console.log(count);