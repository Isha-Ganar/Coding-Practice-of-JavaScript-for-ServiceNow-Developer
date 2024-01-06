console.log('Learning Strings');
const str = 'hiii';
const str2 = 'isha';
const str3 = 'I love Fruits';

console.log(str.length); //property

//methods
console.log(str.charAt(0));

console.log(str.charCodeAt(2));

console.log(str.codePointAt(2));

console.log(str.concat(' ', str2, ' Whats the Status', ' Of your work?'));

console.log(str3.endsWith('love', 5)); //checks first 5 places only
console.log(str3.endsWith('love', 6)); //checks first 6 places only
console.log(str3.endsWith('love', 7)); //checks first 7 places only

console.log(str3.includes('love',2)); //will start from 2nd place
console.log(str3.includes('love',3)); //will start from 3rd place

console.log(str3.search('love'));

console.log(str3.toLowerCase());

console.log(str3.toUpperCase());