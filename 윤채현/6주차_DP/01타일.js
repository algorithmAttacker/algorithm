const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const N = +fs.readFileSync(filePath).toString().trim();

let dp = {};

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

// 수를 나열해보면 피보나치 수열인것을 바로 알 수 있음.
for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);
