/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 
 */

function solution(k, m, score) {
  let answer = 0;
  const scores = score.sort((a,b) => b - a).slice(0, score.length - (score.length % m));
  for (let index = 0; index < scores.length; index += m) {
    const apples = scores.slice(index, index + m);
    const min = Math.min(...apples);
    answer += min * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))