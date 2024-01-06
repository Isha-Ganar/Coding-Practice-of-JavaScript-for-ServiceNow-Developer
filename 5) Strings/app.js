console.log('Learning Strings');
const str = 'hiii';
const str2 = 'isha';
const str3 = 'I love Fruits';
const pal = 'pilolip';

console.log(str.length); //property

//methods
console.log(str.charAt(0));

console.log(str.charCodeAt(2));

console.log(str.codePointAt(2));

console.log(str.concat(' ', str2, ' Whats the Status', ' Of your work?'));

console.log(str3.endsWith('love', 5)); //checks first 5 places only
console.log(str3.endsWith('love', 6)); //checks first 6 places only
console.log(str3.endsWith('love', 7)); //checks first 7 places only

console.log(str3.includes('love', 2)); //will start from 2nd place
console.log(str3.includes('love', 3)); //will start from 3rd place

console.log(str3.search('love'));

console.log(str3.toLowerCase());

console.log(str3.toUpperCase());

//Reverse a String:
function reverseString(st) {
return st.split('').reverse().join('');
}
console.log(reverseString(str2));

//Palindrome Check:
function isPalindrome(st) {
  const reversed = st.split('').reverse().join('');
  return st === reversed;
}
console.log('is Palindrome?', isPalindrome(str3));
console.log('is Palindrome?', isPalindrome(pal));

//Anagram Check
function areAnagrams(st1, st2) {
  const sortedStr1 = st1.split('').sort().join('');
  const sortedStr2 = st2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
console.log('is Anagram?', areAnagrams('sad','dolg'));
console.log('is Anagram?', areAnagrams('gold','dolg'));

//count Vowels
function countVowels(st) {
  const vowels = st.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
console.log('Vowels count', countVowels(str3));
console.log('Vowels count', countVowels(str));