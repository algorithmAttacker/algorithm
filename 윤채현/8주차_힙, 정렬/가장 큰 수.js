// 구글링해서 풀었어여

function solution(numbers) {
  let answer = numbers
    .map((ele) => ele.toString())
    .sort((a, b) => {
      if (b + a > a + b) {
        return 1;
      } else if (b + a < a + b) {
        return -1;
      } else {
        return 0;
      }
    })
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
