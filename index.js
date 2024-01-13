function isPalindrome(word) {
  // Write your algorithm here
  let originWord = word.trim().toLowerCase();
  let reversedWord = originWord.split('').reverse().join('');
  return originWord==reversedWord;

}

/* 
  Add your pseudocode here
  - Trim the word to remove leading and ending spaces if any.
  - Change the word to lower case letters
  - Create a reversed version of the word.
  - Compare the original word to reversed word.
*/


/*
  Add written explanation of your solution here
  Split is use to change the word into an array of letters, which is then reversed and 
  concatenated into a new word using join('')

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
