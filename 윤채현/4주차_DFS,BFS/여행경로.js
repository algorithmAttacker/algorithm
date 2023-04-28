// 첫번째 풀이.. dfs 썼는데 정확도 50점 나왔어여
function solution(tickets) {
  let graph = [...new Array(10000)].map(() => []);
  let visited = [...new Array(10000)].map(() => []);

  let sortedTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    sortedTickets = [...sortedTickets, ...tickets[i]];
  }
  sortedTickets.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else return -1;
  });
  let map = new Map();
  let reverseMap = new Map();
  let icnIdx;
  sortedTickets.forEach((ele, idx) => {
    if (!map.has(ele)) {
      if (ele === "ICN") {
        icnIdx = idx;
      }
      map.set(ele, idx);
      reverseMap.set(idx, ele);
    }
  });

  for (let i = 0; i < tickets.length; i++) {
    graph[map.get(tickets[i][0])].push(map.get(tickets[i][1]));
    visited[map.get(tickets[i][0])].push(0);
  }
  graph.forEach(ele => ele.sort((a, b) => a - b));
  let resultStr = "";
  function DFS(x, str) {
    if (!visited[x].some(i => i === 0)) {
      resultStr += str;
      return;
    }
    for (let i = 0; i < graph[x].length; i++) {
      if (visited[x][i] === 0) {
        visited[x][i] = 1;
        DFS(graph[x][i], str + reverseMap.get(graph[x][i]));
      }
    }
  }

  DFS(icnIdx, "");
  let resultArray = ["ICN"];

  for (let i = 0; i < resultStr.length; i += 3) {
    const chunk = resultStr.slice(i, i + 3);
    resultArray.push(chunk);
  }
  return resultArray;
}

// 구글링해서 풀었슴돠..ㅎ

function solution(tickets) {
  // 알파벳 순서를 지켜야하므로 알파벳 순 정렬
  tickets.sort();
  let len = tickets.length;

  // 방문 여부를 위한 플래그
  let visited = new Array(len).fill(0);
  let answer = [];

  function dfs(cur, cnt, path) {
    // answer의 길이가 0일때 알파벳순으로 가장 최단경로가 되기 때문에 조건을 추가해줌
    if (cnt === len && answer.length === 0) {
      answer = path;
      return;
    }

    for (let i = 0; i < len; i++) {
      // 방문 했을 시에는 continue
      if (visited[i]) continue;
      // 시작점이 current와 같으면 방문 처리를 해주고, path배열을 복사해서 재귀함수를 실행시킴
      if (tickets[i][0] === cur) {
        visited[i] = 1;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        // 다른 경우들도 고려해야하므로 해당 번호의 visited는 0으로 바꿔줌
        visited[i] = 0;
      }
    }
  }

  dfs("ICN", 0, ["ICN"]);
  return answer;
}
