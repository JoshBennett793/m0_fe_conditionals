var goodDrivingRecord = true;
var age = 26;

if (goodDrivingRecord && age > 25) {
	console.log("You get a discount");
} else if (goodDrivingRecord || age > 25) {
	console.log("You pay full price!");
} else {
	console.log("You need someone else to sign for the rental.");
}