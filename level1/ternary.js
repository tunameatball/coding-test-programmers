/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 
 */


function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}