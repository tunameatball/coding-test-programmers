/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 
 */


function solution(s){
  let answer = true;

  const stack = [];

  if (s[s.length - 1] == '(') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (bracket == '(') {
      stack.push(bracket);
    } else if (bracket == ')') {
      if (!stack.pop()) {
        answer = false;
        break;
      }
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}