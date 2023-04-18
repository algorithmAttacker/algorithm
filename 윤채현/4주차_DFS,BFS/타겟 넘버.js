// 첫번째 풀이.. 흑흑 시간초과 ㅠㅠ 1,2번 태케에서 걸리네요

function solution(numbers, target) {
  let cnt = 0;
  let queue = [[0, 0]];

  while (queue.length > 0) {
    let [cur, nextIdx] = queue.shift();

    if (cur !== target && nextIdx === numbers.length) {
      continue;
    }
    if (cur === target && nextIdx === numbers.length) {
      cnt++;
    }
    if (nextIdx < numbers.length) {
      const newIdx = nextIdx + 1;
      queue.push(
        [cur + numbers[nextIdx], newIdx],
        [cur - numbers[nextIdx], newIdx],
      );
    }
  }
  return cnt;
}

// 두번째 풀이 DFS & 재귀로 풀이
function solution(numbers, target) {
  let cnt = 0;
  function DFS(cur, idx) {
    if (idx === numbers.length && target === cur) {
      cnt++;
      return;
    }
    if (idx === numbers.length) {
      return;
    }

    DFS(cur + numbers[idx], idx + 1);
    DFS(cur - numbers[idx], idx + 1);
  }

  DFS(0, 0);

  return cnt;
}
