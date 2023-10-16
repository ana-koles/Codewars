/* TASK 13
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros. */

function zeros (n) {
    let separator = n;
    let count = 0;
    let result = n;

    while (result > 1) {
        result = Math.floor(separator / 5);
        separator = result;
        count += separator;
    }

    return count;
}

console.log(zeros(6));//1
console.log(zeros(5));//1
console.log(zeros(6));//1
console.log(zeros(30));//7
console.log(zeros(0));//0
