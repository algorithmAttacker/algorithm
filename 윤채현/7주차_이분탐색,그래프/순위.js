function solution(n, results) {
  var answer = 0;

  let arr = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(false);
  }

  results.forEach((result) => {
    const [winner, loser] = result;
    arr[winner - 1][loser - 1] = 1;
    arr[loser - 1][winner - 1] = -1;
  });

  for (let m = 0; m < n; m++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 플루이드 와샬 알고리즘으로 i~m m~j가 1일때 i~j도 1인것으로 간주
        if (arr[i][m] === 1 && arr[m][j] === 1) {
          arr[i][j] = 1;
        }
        if (arr[i][m] === -1 && arr[m][j] === -1) {
          arr[i][j] = -1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let hasFalse = false;
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === false && i !== j) {
        hasFalse = true;
        break;
      }
    }
    // i번째 선수가 hasFalse를 가지고 있으면 answer count값을 늘려줌
    answer = !hasFalse ? answer + 1 : answer;
  }

  return answer;
}
