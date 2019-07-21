// if a number is divided by 12 print de rest of the numbers that are divided by 12
// if a number is not divide by 12 print the rest of the number substracting -1
var theNumber = 121;
if (theNumber % 12 == 0) {
    for (; theNumber >= 0; theNumber -= theNumber) {
        console.log(theNumber);
    }
}
else {
    for (; theNumber >= 0; theNumber--) {
        console.log(theNumber);
    }
}
