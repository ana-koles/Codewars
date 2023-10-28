/* Count IP Addresses
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50
* With input "10.0.0.0", "10.0.1.0"   => return  256
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end){
  const arrStart = start.split('.');
  const arrEnd = end.split('.');
  let exponent  = 0;
  let result = 0;
  const maxValue = 256;
  let reduceValue = 0;

  for (let i = arrEnd.length - 1; i >= 0; i--) {

    if (i === arrEnd.length - 1) {
      if (arrEnd[Number(i)] >= arrStart[Number(i)]) {
        result += Number(arrEnd[i]) - Number(arrStart[i]);
      } else {
        result = maxValue + Number(arrEnd[i]) - Number(arrStart[i]);
        reduceValue++;
      }

    } else {
      exponent++;

      if ((Number(arrEnd[i]) - reduceValue) >= Number(arrStart[i])) {
        if (reduceValue > 0) {
          result += (Number(arrEnd[i]) - reduceValue - Number(arrStart[i])) * (maxValue**(exponent));
          reduceValue = 0;
        } else {
          result += (Number(arrEnd[i]) - Number(arrStart[i])) * (maxValue**exponent);
        }

      } else {
          result += (maxValue + Number(arrEnd[i]) - Number(arrStart[i])) * (maxValue**exponent);
          reduceValue++;
      }
    }

  }
  return result;

}

console.log(ipsBetween("168.242.114.7", "180.194.112.81"));



function ipsBetween2(start, end) {
  const arrStart = start.split('.');
  const arrEnd = end.split('.');
  let result = 0;

  for (let i = arrEnd.length - 1; i >= 0; i--) {
    const difference = parseInt(arrEnd[i]) - parseInt(arrStart[i]);
    result += difference * Math.pow(256, arrEnd.length - 1 - i);
  }

  return result;
}

console.log(ipsBetween2("168.242.114.7", "180.194.112.81"));



function ipsBetween(start, end){
  const arrStart = start.split('.');
  const arrEnd = end.split('.');
  let result = 0;
  const maxValue = 256;

  for (let i = arrEnd.length - 1; i >= 0; i--) {
      let difference = Number(arrEnd[i]) - Number(arrStart[i]);
      result += difference * (Math.pow(maxValue, arrEnd.length - i - 1));
  }
  return result;

}

console.log(ipsBetween("168.242.114.7", "180.194.112.81"));