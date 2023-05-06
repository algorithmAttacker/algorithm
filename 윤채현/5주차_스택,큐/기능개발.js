function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((ele, idx) =>
    Math.ceil((100 - ele) / speeds[idx]),
  );
  let cnt = 1;
  let curMax = days[0];
  for (let i = 0; i < days.length; i++) {
    if (curMax >= days[i + 1]) {
      curMax = Math.max(days[i], curMax);
      cnt++;
      continue;
    } else {
      answer.push(cnt);
      curMax = days[i + 1];
      cnt = 1;
    }
  }
  return answer;
}
