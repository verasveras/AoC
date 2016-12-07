let input = 'R3, L5, R1, R2, L5, R2, R3, L2, L5, R5, L4, L3, R5, L1, R3, R4, R1, L3, R3, L2, L5, L2, R4, R5, R5, L4, L3, L3, R4, R4, R5, L5, L3, R2, R2, L3, L4, L5, R1, R3, L3, R2, L3, R5, L194, L2, L5, R2, R1, R1, L1, L5, L4, R4, R2, R2, L4, L1, R2, R53, R3, L5, R72, R2, L5, R3, L4, R187, L4, L5, L2, R1, R3, R5, L4, L4, R2, R5, L5, L4, L3, R5, L2, R1, R1, R4, L1, R2, L3, R5, L4, R2, L3, R1, L4, R4, L1, L2, R3, L1, L1, R4, R3, L4, R2, R5, L2, L3, L3, L1, R3, R5, R2, R3, R1, R2, L1, L4, L5, L2, R4, R5, L2, R4, R4, L3, R2, R1, L4, R3, L3, L4, L3, L1, R3, L2, R2, L4, L4, L5, R3, R5, R3, L2, R5, L2, L1, L5, L1, R2, R4, L5, R2, L4, L5, L4, L5, L2, L5, L4, R5, R3, R2, R2, L3, R3, L2, L5';
input = input.split(', ');

let facing = [0, 1, 2, 3]; // north east south west
let facingMoved = [0, 0, 0, 0]; // how much you've moved in any direction
let facingIndex = 0; // the current direction you're facing
let visited = []; // an array of all the coordinates you've seen.
let firstRepeatedCoord = []; // the first place you visit twice


function goRight(blocks){

	if (facingIndex !== 3) facingIndex++; 	// turn to the right
	else facingIndex = 0;
	facingMoved[facingIndex] += Number(blocks);
}

function goLeft(blocks){

	if (facingIndex !== 0) facingIndex--; 	// turn to the left
	else facingIndex = 3;
	facingMoved[facingIndex] += Number(blocks);
}

function getDistance(){

	let [north, east, south, west] = facingMoved; 
	let totalBlocks = Math.abs(north-south) + Math.abs(east-west);
	return totalBlocks;

}

function getCoordinates(){

	let [north, east, south, west] = facingMoved; 
	return `${north-south}, ${east-west}`;
}

let foundRepeat = false;
function checkIfVisited(coordinates){

	if (foundRepeat) return false;

	console.log('Checking ', coordinates);
	if (visited.indexOf(coordinates) >= 0){
		console.log('Repeated')
		foundRepeat = true;
		firstRepeatedCoord = coordinates;
		return true;
	}

	return false;

}

for (let i = 0; i < input.length; i++){

	let directions = input[i];
	blocks = input[i].substring(1);

	let coordinates = getCoordinates();
	visited.push(coordinates);
	if (checkIfVisited(coordinates)){

	}

	switch(directions[0]){
		case 'L':
			goLeft(blocks);
			break;

		case 'R': 
			goRight(blocks);
			break;

		default:
			console.log('Broke! You were facing ', facing[facingIndex]);
	}

};

return {finalDistance: getDistance(), firstRepeatedCoord: firstRepeatedCoord}

