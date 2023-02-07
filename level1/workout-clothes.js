/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 
 */

function solution(n, lost, reserve) {
  let answer = 0;
  let sameValue = [];
  
  const sortedReserve = reserve.sort();
  
  sortedReserve.forEach((value, index, array) => {
      const lostIndex = lost.indexOf(value);
      if (lostIndex != -1) {
        lost.splice(lostIndex, 1);
        sameValue.push(value);
      }
  });

  sameValue.forEach((value, index, array) => {
      const sameValueIndex = sortedReserve.indexOf(value);
      sortedReserve.splice(sameValueIndex, 1);
  });
  
  sortedReserve.forEach((value, index, array)=> {
      const plusValue = value + 1;
      const minusValue = value - 1;
      
      let lostIndex = -1;
      
      if (lostIndex === -1) {
        lostIndex = lost.indexOf(minusValue);
      }
      
      if (lostIndex === -1) {
        lostIndex = lost.indexOf(plusValue);
      }

      if (lostIndex != -1) {
        lost.splice(lostIndex, 1)
      }
  });
  
  answer = n - lost.length;
  return answer;
}