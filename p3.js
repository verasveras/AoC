const input = require('./p3input');

let validTriangles = 0;

function checkTriangle([a, b, c]){
	return (a + b > c) && (a + c > b) && (b + c > a);
}

input.forEach((triangle) => {
	if (checkTriangle(triangle)) validTriangles++;
})

console.log(validTriangles);