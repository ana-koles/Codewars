/* TASK 3
DESCRIPTION:
Background - the Collatz Conjecture:
Imagine you are given a positive integer, n, then:

if n is even, calculate: n / 2
if n is odd, calculate: 3 * n + 1
Repeat until your answer is 1. The Collatz conjecture states that performing this operation
repeatedly, you will always eventually reach 1.

You can try creating Collatz sequences with this kata. For further information, see the wiki page.

Now! Your task:
Given an array of positive integers, return the integer whose Collatz sequence is the longest.

Example:

longestCollatz([2, 4, 3])===3;
Explanation: The Collatz sequence for 2 has a length of 1, the sequence for 4 has a length of 2,
 and the sequence for 3 has a length of 7. So from our array, the integer 3 is the one with
 the longest Collatz sequence.

Hence, your function should return 3.

Note:
There may be more than one answer, i.e. two or more integers produce the longest Collatz sequence,
 because they happen to have sequences of the same length. In this case, your function
 should return the integer that appears first in the array.

Example: Given an array: [2, 5, 32], both 5 and 32 have Collatz sequences of length 5.
These are also the longest sequences from our array.

In this case, our function returns 5, because 5 comes before 32 in our array. */

function longestCollatz (inputArray) {
    const arr = [];
    let count = 0;

    function calculate(item) {
        if (item % 2 === 0) {
            item = item / 2;
            count++;
        } else {
            item = item * 3 + 1;
            count++;
        }
        if (item !== 1) {
            return calculate(item);
        } else if (item === 1) {
            return 1;
        }
    }

    inputArray.forEach((item, index) => {
        let itemOrigin = item;
        let returnValue = 0;

        count = 0;
        if (item !== 1) {
            returnValue = calculate(item);
        }

        if (returnValue === 1 || item === 1) {
            arr.push([itemOrigin, count, index]);
        }
    });

    const arrSorted = arr.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[2] - b[2];
        }
    })


    return arrSorted[0][0];
  }

console.log(longestCollatz([26, 120, 19]));

