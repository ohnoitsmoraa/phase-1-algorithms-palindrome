function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  1. Convert all words to lowercase.
  2. Initialize the two pointers one from the left and the other from right.
  3. Loop  until the two pointers meet in the middle.
  4. If the stringed characters do not much return false to show not a palindrome.
  5. If loop completes without finding anything that is not a palindrome, it returns true.
*/

/*
  Add written explanation of your solution here
  - function isPalindrome, converts the entire word to lowercase to handle case sensitivity
  - The two pointers initialized, transverse the word from both ends to the center.
  - The while loop checks characters positions until they meet at the center and if not equal it returns false.
  - If the loop completes without any mismatch, it returns true to show it is a palindrome.

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
