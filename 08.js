/* TASK 8 */
/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that
 returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
 The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!) */

function findMissingLetter(array) {
    let upperCase = false;
    let workArray = [];
    if (array[0] === array[0].toUpperCase()) {
        upperCase = true;
        workArray = array.map(item => item.toLowerCase());
    } else {
        workArray = [...array];
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const startElem = alphabet.filter(elem => elem === workArray[0]);
    const startElemIndex = alphabet.indexOf(startElem[0]);
    const workAlphabet = alphabet.slice(startElemIndex);

    let char ='';
    workArray.find((item, index) => {
        if (item === workAlphabet[index]) {
            return false;
        } else {
            char = workAlphabet[index];
            return true;
        }
    });

     if (upperCase) {
        return char.toUpperCase();
    }

  return char;
}

console.log(findMissingLetter(['a','b','c','d','f'])); // e
console.log(findMissingLetter(['O','Q','R','S']));//P

