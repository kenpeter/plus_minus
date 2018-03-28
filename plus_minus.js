
var arr = [-4, 3, -9, 0, 4, 1];
var size = arr.length;

var posiT = 0;
var negaT = 0;
var zeroT = 0;
for(var i in arr) {
	var item = arr[i];

	if(item > 0) {
		posiT++;
	} else if(item < 0) {
		negaT++;
	} else {
		zeroT++;
	}
}

posiT = posiT / size;
negaT = negaT / size;
zeroT = zeroT / size;

console.log(posiT.toFixed(6));
console.log(negaT.toFixed(6));
console.log(zeroT.toFixed(6));
