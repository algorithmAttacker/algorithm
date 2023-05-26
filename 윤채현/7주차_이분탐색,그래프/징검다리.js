function solution(distance, rocks, n) {
  var answer = 0;
  let min = 0;
  let max = distance;
  rocks = [0, ...rocks.sort((a, b) => a - b), distance];

  while (min <= max) {
    // mid는 기준거리
    let mid = Math.floor((min + max) / 2);
    let removeCnt = 0;
    let now = 0;

    // 삭제할 수 있는 개수를 셈
    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - now < mid) {
        removeCnt++;
      } else {
        now = rocks[i];
      }
    }

    if (removeCnt <= n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return max;
}
