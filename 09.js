/* TASK 09
Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of
data are stored as a single data value and count.

A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A,
then 3 B, then 3 C and last there is 1 D.

Your task is to write a RLE encoder and decoder using this technique. The texts to encode will
always consist of only uppercase characters, no numbers. */

function encode(input) {
    const array = input.split('');
    let count = 1;
    let newElem = '';
    const result = [];
    array.forEach((item, index, arr) => {

        if (arr.length === 1) {
            result.push([count, item]);
            return result;
        }

        if (index === 0) {
            newElem = item;
        } else if (item === arr[index - 1]) {
            if (index === arr.length - 1) {
                count++;
                result.push([count, newElem]);
            } else {
                count++;
            }

        } else {
            result.push([count, newElem]);
            newElem = item;
            count = 1;
            if (index === arr.length - 1) {
                result.push([count, newElem]);
            }
        }
    });

    return result.flat().join('');

}

function decode(input) {
    const arr = input.split('');
    let char = '';
    let count = '';
    let str = '';
    const result = [];
    let regex = /^[0-9]\d*$/;
    arr.forEach((elem) => {
        if (regex.test(elem)) {
            count += elem;
        } else {
            char = elem;
            count = +count;
            str += char.repeat(count);
            count = '';
            char = '';
        }
    });

    return str;
}

console.log(encode('A'));//, '1A');
console.log(encode('AAA'));//, '3A');
console.log(encode('AB'));//, '1A1B');
console.log(encode('AAABBBCCCA'));//, '3A3B3C1A');

console.log(decode('1A'));//, 'A');
console.log(decode('3A'));//, 'AAA');
console.log(decode('1A1B'));//, 'AB');
console.log(decode('3A3B3C1A'));//, 'AAABBBCCCA');
console.log(decode('10A1B'));

console.log(decode(encode('AAAAAAAAAAB')))//, 'AAAAAAAAAAB');
console.log(decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')))//, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(encode(decode('10A1B')));//, '10A1B');
console.log(encode(decode('1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z')))//, '1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z');