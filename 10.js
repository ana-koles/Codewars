/* TASK 10
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase. */

function anagramDifference(w1,w2){
    const w1Arr = w1.split('').sort(); //a    c deorw
    const w2Arr = w2.split('').sort(); //a (a)c ehkknrr
    const result = [];
    const commonArr = [];
    let countDif = 0;

    for (let i = 0; i < w1Arr.length; i++) {
        let char = w1Arr[i];
        if (w2Arr.includes(char)) {
            commonArr.push(char);
            w1Arr.shift();
            let index = w2Arr.indexOf(char);
            w2Arr.splice(index, 1);
            i--;
        } else {
            w1Arr.shift();
            i--;
            countDif++;
        }
    }
    return countDif + w2Arr.length ;
 }

 console.log(anagramDifference('a', 'aab'));


/*   const testCases = [
  // w1     w2   expected
    ["",    "",    0],
    ["a",   "",    1],
    ["",    "a",   1],
    ["ab",  "a",   1],
    ["ab",  "cd",  4],
    ["aab", "a",   2],
    ["a",   "aab", 2],
    ["codewars", "hackerrank", 10]
  ]; */
