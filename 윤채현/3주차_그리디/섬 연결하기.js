// 첫번째 풀이 (bfs => 실패)
function solution(n, costs) {
  let graph = new Array(n).fill(0).map(v => [v]);

  costs.forEach(ele => {
    const [a, b, cost] = ele;
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  });

  function bfs(start) {
    let visited = new Array(n).fill(0);
    let queue = [];
    let cnt = 0;
    queue.push([start, 0]);

    while (queue.length) {
      const [cur, cost] = queue.shift();
      if (!visited[cur]) {
        visited[cur] = 1;
        cnt += cost;
        for (let i = 1; i < graph[cur].length; i++) {
          const [next, nextCost] = graph[cur][i];
          if (visited[next]) {
            continue;
          }
          queue.push([next, nextCost]);
        }
      }
    }

    return cnt;
  }

  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    min = Math.min(bfs(i), min);
  }
  return min;
}

// 문제를 보면 "모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용"을 구해야 한다고 되어 있습니다. 하지만 주어진 코드에서는 모든 섬을 연결하는 최소 비용을 구하는 것이 아니라, 각 섬에서 출발하여 도달할 수 있는 다른 섬들을 연결하는 경우의 최소 비용을 구하고 있습니다.
//
//     따라서 주어진 코드는 일부 경우에는 정답을 구할 수 있지만, 모든 섬이 서로 통행 가능하도록 만드는 최소 비용을 구할 수 없습니다. 이를 해결하기 위해서는, 전체 그래프에서 모든 섬을 연결하는 최소 비용을 구해야 합니다.
//
//     이를 위해서는 대표적으로 크루스칼 알고리즘이나 프림 알고리즘이 사용됩니다. 이 알고리즘들을 이용하여 문제를 풀어보시기를 추천드립니다.
//
//  크루스칼 알고리즘 gpt가 알려조써~
function solution(n, costs) {
  // 각 섬을 별도의 집합으로 초기화
  const parent = new Array(n).fill().map((_, i) => i);
  const rank = new Array(n).fill(0);

  // 비용이 낮은 순으로 간선 정렬
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;
  for (const [from, to, cost] of sortedCosts) {
    // 두 섬이 이미 같은 집합에 속해 있으면 스킵
    if (findParent(from) === findParent(to)) continue;

    // 두 집합을 합치고 비용 누적
    union(from, to);
    totalCost += cost;

    // 모든 섬이 연결되었으면 종료
    if (isAllConnected()) break;
  }

  return totalCost;

  function findParent(x) {
    if (parent[x] !== x) parent[x] = findParent(parent[x]);
    return parent[x];
  }

  function union(x, y) {
    const px = findParent(x);
    const py = findParent(y);

    if (px === py) return;

    if (rank[px] > rank[py]) parent[py] = px;
    else {
      parent[px] = py;
      if (rank[px] === rank[py]) rank[py]++;
    }
  }

  function isAllConnected() {
    const root = findParent(0);
    for (let i = 1; i < n; i++) {
      if (findParent(i) !== root) return false;
    }
    return true;
  }
}
