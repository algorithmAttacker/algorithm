function solution(n, edge) {
  var answer = 0;

  // 그래프 정보를 저장할 array
  let graph = new Array(n + 1).fill(0).map(() => []);
  // 간선의 거리 정보를 저장할 map
  let map = new Map();

  // 노드의 거리 정보를 0으로 초기화
  for (let i = 1; i <= n; i++) {
    map.set(i, 0);
  }

  // 그래프마다 노드끼리 연결된 정보를 그래프에 넣어줌
  edge.forEach((i) => {
    const [a, b] = i;

    graph[b].push(a);
    graph[a].push(b);
  });

  bfs();

  function bfs() {
    // 초기값 노드 1에서 시작, 거리 정보는 0으로 queue에 넣어줌
    let queue = [[1, 0]];
    let visited = new Array(n + 1).fill(0);
    while (queue.length) {
      const [cur, cnt] = queue.shift();
      visited[cur] = 1;
      graph[cur].forEach((ele) => {
        if (!visited[ele]) {
          visited[ele] = 1;
          queue.push([ele, cnt + 1]);
          // 거리 정보도 map에 저장
          map.set(ele, cnt + 1);
        }
      });
    }
  }

  const arr = map.values();

  const max = Math.max(...arr);

  // 최대 거리를 가지고 있는 key의 개수를 세어줌
  map.forEach((ele, idx) => {
    if (map.get(idx + 1) === max) {
      answer++;
    }
  });
  return answer;
}
