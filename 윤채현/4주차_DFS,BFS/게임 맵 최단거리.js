function solution(maps) {
  var answer = 0;

  function BFS() {
    const queue = [];
    const xLen = maps.length;
    const yLen = maps[0].length;
    console.log(xLen, yLen);
    const visited = [...new Array(xLen)].map(() => [
      ...new Array(yLen).fill(0),
    ]);

    queue.push([0, 0, 1]);

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    while (queue.length) {
      let [curX, curY, cnt] = queue.shift();
      visited[curX][curY] = 1;

      if (curX === xLen - 1 && curY === yLen - 1) {
        return cnt;
      }

      for (let i = 0; i < 4; i++) {
        let nx = curX + dx[i];
        let ny = curY + dy[i];
        if (nx >= 0 && ny >= 0 && nx < xLen && ny < yLen) {
          if (!visited[nx][ny] && maps[nx][ny]) {
            visited[nx][ny] = 1;
            let newCnt = cnt + 1;
            queue.push([nx, ny, newCnt]);
          }
        }
      }
    }
  }

  const count = BFS();

  return count === undefined ? -1 : count;
}
