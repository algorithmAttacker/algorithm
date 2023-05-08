function solution(progresses, speeds) {
  var answer = [];
  // 기능을 완료하는데 걸리는 시간을 계산
  const days = progresses.map((ele, idx) =>
    Math.ceil((100 - ele) / speeds[idx]),
  );
  let cnt = 1;
  // 현재까지 보류된 기능들 중 가장 오래 걸리는 시간보다
  // 그 이전의 개발되고 있는 기능의 소요 시간이 현재 순서의 기능보다 오래걸릴 때, 한번에 배포해야 하므로 한번에 배포되는 기능의 개수를 증가시킴.
  let curMax = days[0];
  for (let i = 0; i < days.length; i++) {
    if (curMax >= days[i + 1]) {
      curMax = Math.max(days[i], curMax);
      cnt++;
      continue;
    } else {
      // 그렇지 않을 때, 기능을 배포시킬 수 있음. 기능을 배포하고, 지금까지 count된 기능의 개수를 answer 배열에 넣어줌.
      answer.push(cnt);
      // 다음 최대 소요 시간을 배열의 다음 index를 넣어줌.
      curMax = days[i + 1];
      // count를 1개로 초기화 시켜줌.
      cnt = 1;
    }
  }
  return answer;
}
