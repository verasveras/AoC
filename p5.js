const input = 'ojvtpuvg';
const crypto = require('crypto');

let number = 0;

// solution for part a
// let password = '';

// while (true){

// 	let md5 = crypto.createHash('md5');
// 	let hex = md5.update(input + number).digest('hex');

// 	if (hex.slice(0, 5) == '00000'){
// 		password += hex[5];
// 	}

// 	if (password.length === 8) {
// 		console.log(password);
// 		break;
// 	}

// 	number++;
// }


let password = [['1', 'x'], ['1', 'x'], ['1', 'x'], ['1', 'x'], ['1', 'x'], ['1', 'x'], ['1', 'x'], ['1', 'x']];

function haveAllChanged(){

	for (let i = 0; i < password.length; i++){
		if (password[i][1] === 'x') return false;
	}
	return true;
}

function makeChange(position, newValue){
	if (password[position][1] === 'x'){
		password[position][0] = newValue;
		password[position][1] = 'o';
		console.log(getPassword());
	}
}

function validPosition(position){
	return position >= 0 && position < 8;
}

function getPassword(){
	let passwordStr = '';

	password.forEach(function(element){
		passwordStr += element[0];
	})

	return passwordStr;
}

while (true){

	let md5 = crypto.createHash('md5');
	let hex = md5.update(input + number).digest('hex');

	if (hex.slice(0, 5) == '00000'){

		let position = Number(hex[5]);
		if (validPosition(position)) {
			makeChange(position, hex[6]);
		}
	}

	if (haveAllChanged()) {
		console.log(getPassword());
		break;
	}

	number++;
}