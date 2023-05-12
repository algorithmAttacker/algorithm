const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 2차원 배열 0으로 초기화
let arr = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

// 이항계수에서 파스칼의 법칙을 사용할것이므로 nC0 = 1, nCn = 1, nC1 = i로 초기화
for (let i = 0; i <= N; i++) {
  arr[i][0] = 1;
  arr[i][i] = 1;
  arr[i][1] = i;
}

// 파스칼의 법칙 nCk = n-1Ck + n-1Ck-1를 사용해서 배열에 값을 넣어줌
for (let i = 1; i <= N; i++) {
  for (let j = 2; j <= K; j++) {
    arr[i][j] = (arr[i - 1][j] + arr[i - 1][j - 1]) % 10007;
  }
}

const result = arr[N][K];

console.log(result);
