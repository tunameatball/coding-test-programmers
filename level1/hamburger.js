/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502
 * 
 */

function solution(ingredient) {
  let count = 0;
  const reg = /1231/;

  let numberStr = ingredient.join('');
  
  let index = numberStr.search(reg);

  while (index != -1) {
    count += 1;

    let prevStr = numberStr.substr(0, index);
    const nextStr = numberStr.substr(index + 4);

    numberStr = prevStr + nextStr;
    index = numberStr.search(reg);
  }

  return count;
}

// function solution(ingredient) {
//   const result = ingredient.reduce((hamburger, number, index) => {
//     hamburger.numStr += number;
//     const length = hamburger.numStr.length - 4;
//     if (length >= 0) {
//       if (hamburger.numStr.substr(length) == '1231') {
//         hamburger.numStr = hamburger.numStr.split('1231')[0];
//         hamburger.count += 1
//       }
//     }
//     console.log(hamburger.numStr);
//     return hamburger;
//   }, { numStr: '', count: 0 })
//   return result.count;
// }


solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);