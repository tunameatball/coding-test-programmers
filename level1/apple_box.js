/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 
 */

// function solution(k, m, score) {
//   let answer = 0;
//   const scores = score.sort((a,b) => b - a).slice(0, score.length - (score.length % m));
//   for (let index = 0; index < scores.length; index += m) {
//     const apples = scores.slice(index, index + m);
//     const min = Math.min(...apples);
//     answer += min * m;
//   }
//   return answer;
// }

function solution(k, m, score) {
  const apples = {};
  score.forEach(value => {
    apples[value] = (apples[value] ?? 0) + 1;
  });

  const scores = Object.keys(apples).sort();
  return scores.reduceRight((arr ,score, index) => {
    arr += parseInt(apples[score] / m) * score;
    if (index != 0) {
      apples[scores.at(index-1)] += apples[score] % m;
    }
    return arr;
  }, 0) * m;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))