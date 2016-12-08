const input = require('./p3input');

let validTriangleRows = 0;
let validTriangleColumns = 0;

function checkTriangle([a, b, c]){
	return (a + b > c) && (a + c > b) && (b + c > a);
}

input.forEach((triangle) => {
	if (checkTriangle(triangle)) validTriangleRows++;
})

for (let i = 0; i < input.length; i = i + 3){


	let tri1 = [input[i][0], input[i+1][0], input[i+2][0]];
	let tri2 = [input[i][1], input[i+1][1], input[i+2][1]];
	let tri3 = [input[i][2], input[i+1][2], input[i+2][2]];

	if (checkTriangle(tri1)) validTriangleColumns++;
	if (checkTriangle(tri2)) validTriangleColumns++;
	if (checkTriangle(tri3)) validTriangleColumns++;

}

console.log('Valid triangles for rows:', validTriangleRows, '\nValid triangles for columns:', validTriangleColumns);