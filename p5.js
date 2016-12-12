const input = 'ojvtpuvg';
const crypto = require('crypto');

let number = 0;
let password = '';

while (true){

	let md5 = crypto.createHash('md5');
	let hex = md5.update(input + number).digest('hex');

	if (hex.slice(0, 5) == '00000'){
		password += hex[5];
	}

	if (password.length === 8) {
		console.log(password);
		break;
	}

	number++;
}