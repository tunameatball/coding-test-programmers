/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 
 */

function solution(food) {
  var answer = '0';

  for (let index = food.length - 1; index >= 1; index--) {
    const number = String(index).repeat(parseInt(food[index]/2))
    answer = `${number}${answer}${number}`
  }

  return answer;
}

function solution(food) {
  return food.reduceRight((answer, value, index) => {
    const number = String(index).repeat(parseInt(value/2))
    return `${number}${answer}${number}`
  }, '0');
}