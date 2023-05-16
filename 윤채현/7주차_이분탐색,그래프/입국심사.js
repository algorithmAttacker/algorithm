function solution(n, times) {
  var answer = 0;
  let min = 1;
  let max = n * Math.max(...times);
  // 최솟값이므로 정렬해주고 시작함
  times.sort((a, b) => a - b);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let count = 0;

    times.forEach((time) => {
      // 같은 시간동안 몇명을 검사할 수 있는지
      count = count + Math.floor(mid / time);
      if (count >= n) {
        answer = mid;
        return;
      }
    });

    if (count >= n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}
