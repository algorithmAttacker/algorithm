// 개헬 ..ㅠㅠ

function solution(arr) {
  const operandsCount = Math.ceil(arr.length / 2);
  const max_dp = new Array(operandsCount)
    .fill()
    .map(_ => new Array(operandsCount).fill(-Infinity));
  const min_dp = new Array(operandsCount)
    .fill()
    .map(_ => new Array(operandsCount).fill(Infinity));

  for (let i = 0; i < operandsCount; i++) {
    // 연산을 위해 자기 자신의 값을 넣어줌
    // 연산자와 피연산자가 번갈아 있으므로 index에 2를 곱해주므로 arr에 있는 양수값을 넣어줄 수 있음.
    max_dp[i][i] = +arr[i * 2];
    min_dp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < operandsCount; cnt++) {
    for (let i = 0; i < operandsCount - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === "+") {
          // i부터 j까지의 최댓값은 i부터 k까지의 연산 최댓값 + k+1부터 j까지의 연산 최댓값
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] + max_dp[k + 1][j],
          );
          // i부터 j까지의 최솟값은 i부터 k까지의 연산 최솟값 + k+1부터 j까지의 연산 최솟값
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] + min_dp[k + 1][j],
          );
        } else {
          // 부호가 -일 때, i부터 j까지의 연산 최댓값은 i부터 k까지의 연산 최댓값 - k+1부터 j까지의 연산 최솟값
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] - min_dp[k + 1][j],
          );
          // 마찬가지로 부호가 -일 때, i부터 j까지의 연산 최솟값은 i부터 k까지의 연산 최솟값 - k+1부터 j까지의 연산 최댓값
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] - max_dp[k + 1][j],
          );
        }
      }
    }
  }

  // 로직대로 max_dp 배열의 마지막 피연산자 자리에 최댓값이 들어가게됨
  return max_dp[0][operandsCount - 1];
}
