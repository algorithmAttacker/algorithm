const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let N = +fs.readFileSync(filePath).toString().trim();

// 최솟값을 구하는것이므로 Infinity로 값을 초기화
let dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    // j*j는 제곱수이므로 i를 구성하는 한 항이 될 수 있따.
    // 따라서, i에서 j*j를 뺀 dp배열의 값(dp[i - j * j])에 1을 더한 값(dp[i - j * j] + 1)과
    // 현재 dp[i]에 저장된 값과의 최소값을 구한다.
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
