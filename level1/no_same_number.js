/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 
 */


function solution(arr) {
    const answer = [];
    answer.push(arr.shift());
    arr.forEach(value => {
        if (answer[answer.length - 1] != value) {
            answer.push(value);
        }
    })
    
    return answer;
}