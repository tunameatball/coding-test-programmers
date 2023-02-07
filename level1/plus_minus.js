/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 
 */

function solution(absolutes, signs) {
  let answer = 0;

  absolutes.forEach((value, index) => {
    let number = value;
    if (!signs[index]) {
      number *= -1
    }
    answer += number;
  })
  
  return answer;
}