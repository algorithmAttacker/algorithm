function solution(arr) {
  let answer = [arr[0]];

  arr.forEach((ele, idx) => {
    // 이미 담긴 숫자가 그 배열 바로 이전에 존재하지 않을 때 배열에 넣어줌
    if (answer[answer.length - 1] !== ele) {
      answer.push(ele);
    }
  });
  return answer;
}
