const input = require('./p4input');
let sum = 0;
let roomNumber = '';

function makeCompressedString (letters) {

	// get the frequency count of all the letters
	// compressedLetters is all the letters that show up
	// compressedCount is the # of times a letter at the same index in compressed letters appears
	let compressedLetters = [];
	let compressedCount = [];
	let count = 1;

	let letter = letters[0];
	for (let j = 1; j < letters.length; j++){
		if (letters[j] == letter)
			count++;
		else {
			compressedLetters.push(letter);
			compressedCount.push(count);
			count = 1;
			letter = letters[j];
		}
	}

	compressedLetters.push(letter);
	compressedCount.push(count);

	return { compressedLetters, compressedCount };

}

function checkIfValid (compressedLetters, compressedCount, checksum) {

	let actualCheckSum = [];

	for (let k = 0; k < 5; k++){
		let max = Math.max(...compressedCount);
		let index = compressedCount.indexOf(max);
		actualCheckSum.push(compressedLetters[index]);
		compressedCount[index] = 0;
	}

	actualCheckSum = actualCheckSum.join('');

	if (actualCheckSum == checksum) return true;
	return false;

}

function decryptString(roomString, sector){


	let shift = sector % 26;
	let newString = [];

	for (let i = 0; i < roomString.length; i++){

		let currentString = roomString[i];
		let newStringSection = '';

		for (let j = 0; j < currentString.length; j++){
			let charCode = currentString.charCodeAt(j);
			charCode += shift;
			if (charCode > 122) charCode -= 26;
			newStringSection += String.fromCharCode(charCode);
		}

		newString.push(newStringSection);
	}

	return newString.join('-');
}

function checkIfNorthRoom(roomString){

	if (roomString.match(/north/)) return true;
	return false;

}

for (let i = 0; i < input.length; i++){

	// parse all the information you need off the string
	let room = input[i].split('-');
	let last = room.length - 1;
	let letters = room.slice(0, last).join('');
	letters = letters.split('').sort().join('');

	let roomString = room.slice(0, last);
	let sector = Number(room[last].match(/\d+/)[0]);
	let checksum = room[last].match(/[a-z]+/)[0];
	

	let { compressedLetters, compressedCount } = makeCompressedString(letters);
	if (checkIfValid(compressedLetters, compressedCount, checksum)) {

		sum += sector;
		let decryptedString = decryptString(roomString, sector);
		
		if (checkIfNorthRoom(decryptedString)){
			roomNumber = sector;
		}

	}

}

console.log(sum, roomNumber);