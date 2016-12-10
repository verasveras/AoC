const input = require('./p4input');

let sum = 0;

function isRoomValid(roomNumber){

}

for (let i = 0; i < input.length; i++){
	

	// parse all the information you need off the string
	let room = input[i].split('-');
	let last = room.length - 1;
	let letters = room.slice(0, last).join('');
		letters = letters.split('').sort().join('');
	let sector = room[last].match(/\d+/)[0];
	let checksum = room[last].match(/[a-z]+/)[0];
	

	// get the frequency count of all the letters
	// compressedLetters is all the letters that show up
	// compressedCount is the # of times a letter at the same index in compressed letters appears
	let compressedLetters = '';
	let compressedCount = '';
	let count = 1;

	let letter = letters[0];
	for (let j = 1; j < letters.length; j++){
		if (letters[j] == letter)
			count++;
		else {
			compressedLetters += letter;
			compressedCount += count;
			count = 1;
			letter = letters[j];
		}
	}

	compressedLetters = compressedLetters.split('');
	compressedCount = compressedCount.split('');
	compressedCount = compressedCount.map((element) => Number(element));


	// calculate the actualChecksum of the characters
	let actualCheckSum = [];

	for (let k = 0; k < 5; k++){
		let max = Math.max(...compressedCount);
		let index = compressedCount.indexOf(max);
		actualCheckSum.push(compressedLetters[index]);
		compressedCount[index] = 0;
	}

	actualCheckSum = actualCheckSum.sort().join('');
	// console.log('Actual checksum: ', actualCheckSum);
	// console.log('Given checksum: ', checksum);


	// compare the actual checksum and the given checksum
	if (actualCheckSum == checksum) {
		console.log(room);
		sum += Number(sector);
		console.log('added!', sum);
	}

}

console.log(sum);