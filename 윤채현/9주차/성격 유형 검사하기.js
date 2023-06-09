function solution(survey, choices) {
  var answer = "";
  let map = new Map([
    ["R", 0],
    ["T", 0],
    ["F", 0],
    ["C", 0],
    ["M", 0],
    ["J", 0],
    ["A", 0],
    ["N", 0],
  ]);

  survey.forEach((v, idx) => {
    const [a, b] = v;
    if (choices[idx] > 4) {
      map.set(b, map.get(b) + choices[idx] - 4);
    } else if (choices[idx] < 4) {
      map.set(a, map.get(a) + 4 - choices[idx]);
    }
  });
  console.log(map);
  let arr = [...map.entries()];

  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i][1] < arr[i + 1][1]) {
      answer += arr[i + 1][0];
    } else if (arr[i][1] > arr[i + 1][1]) {
      answer += arr[i][0];
    } else {
      if (arr[i][0] <= arr[i + 1][0]) answer += arr[i][0];
      else answer += arr[i + 1][0];
    }
  }
  return answer;
}
