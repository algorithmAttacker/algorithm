function solution(n, wires) {
  let graph = [...new Array(n + 1)].map(() => []);
  console.log(graph);
  wires.forEach(ele => {
    const [a, b] = ele;
    graph[a].push(b);
    graph[b].push(a);
  });

  function search(start, end) {
    let visited = new Array(n + 1).fill(0);
    let count = 0;
    let queue = [start];
    visited[start] = 1;

    while (queue.length) {
      const cur = queue.shift();
      graph[cur].map(i => {
        if (i !== end && !visited[i]) {
          visited[i] = 1;
          queue.push(i);
        }
      });
      count++;
    }
    return count;
  }
  var answer = 100;

  wires.forEach(ele => {
    const [a, b] = ele;
    const count = Math.abs(search(a, b) - search(b, a));
    answer = answer > count ? count : answer;
  });
  return answer;
}
