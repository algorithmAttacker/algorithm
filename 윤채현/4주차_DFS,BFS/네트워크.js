function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(0);

  function BFS(start) {
    const queue = [start];

    while (queue.length) {
      const cur = queue.shift();
      visited[cur] = 1;

      console.log("cur : ", cur);
      computers[cur].forEach((ele, idx) => {
        if (idx !== cur && ele === 1 && !visited[idx]) {
          queue.push(idx);
        }
      });
    }
  }
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      BFS(i);
      cnt++;
    }
  }
  return cnt;
}
