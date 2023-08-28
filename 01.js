/* TASK 1
Write a function that, given a string of text (possibly with punctuation and line-breaks),
returns an array of the top-3 most occurring words, in descending order of the number of occurrences. */

function topThreeWords(text) {
    const arr = text.toLowerCase().split(' ');
    const arrFiltered = arr.filter(item => item !== '');
    const resultArr = [];

    if (arrFiltered.length === 0) {
        return result;
    }

    let charCount = 0;

    const arrOnlyChar = arrFiltered.map(item => {
        let itemArr = item.split('');
        let itemArrTwo = itemArr.map(char => {

            let index = char.charCodeAt(0);
            if ((index < 97 || index > 122) && index !== 39) {
                let replaceValue = String.fromCharCode(index);
                char = char.replace(replaceValue, '');
            }
            if (index === 32) {
                let replaceValue = String.fromCharCode(index);
                char = char.replace(replaceValue, '');
            }
            return char;
        });
        item = itemArrTwo.join('');
        return item;
    });

    const arrSort = arrOnlyChar.filter(item => item !== '').sort();

    const obj = {};
    let count = 0;
    arrSort.forEach(item => {
        if(obj[item]) {
            count++;
            obj[item] = count;
        } else {
            count = 1;
            obj[item] = count;
        }
    });

    const arrFromObj = Object.entries(obj);
    const arrFromObjSort = arrFromObj.sort((a, b) => b[1] - a[1]);
    const arrWithMostOccurringWords = arrFromObjSort.filter((_, index) => index < 3);

    arrWithMostOccurringWords.forEach(item => resultArr.push(item[0]));
    const resultArrFiltered = resultArr.filter(item => item === "'");
    if (resultArrFiltered.length === resultArr.length) {
        return [];
    }

    return resultArr;
}

