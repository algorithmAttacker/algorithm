function solution(arr) {
  let answer = [arr[0]];

  arr.forEach((ele, idx) => {
    if (answer[answer.length - 1] !== ele) {
      answer.push(ele);
    }
  });
  return answer;
}
