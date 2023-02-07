/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 
 */

function solution(numbers) {
  let answer = 45;
  
  numbers.forEach(value => {
    answer -= value;
  })

  return answer;
}