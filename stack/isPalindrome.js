var wordToCheck = "1racecar1";
var reversedWord = "";
// push all the letters of the word to check into an array
var letters = [];
for (var i = 0; i < wordToCheck.length; i++) {
    letters.push(wordToCheck[i]);
}
// pop of the words in the reverse order
// remove all the elements of the stack starting from the end and use to create the reversedWord
for (var i = 0; i < wordToCheck.length; i++) {
    reversedWord += letters.pop();
}
if (wordToCheck === reversedWord) {
    console.log(wordToCheck, "is a palindrome");
}
else {
    console.log(wordToCheck, "is not a palindrome");
}
