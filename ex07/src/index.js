//
function randomRangeNumber(minNumber, maxNumber) {
return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

}
randomRangeNumber(5,15);
console.log(randomRangeNumber(5, 15));
//
module.exports = randomRangeNumber;