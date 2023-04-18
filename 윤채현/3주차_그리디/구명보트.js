// 첫번째 풀이 => 테케 모두 통과, 효율성 테케 모두 탈락
function solution(peoples, limit) {
  let boatCnt = 0;
  let resultIdx = [];
  let people = peoples;
  for (let i = 0; i < people.length; i++) {
    if (resultIdx.includes(i)) {
      continue;
    }
    const pair = checkMin([limit - people[i], 1, i]);
    if (pair === -1) {
      resultIdx.push(i);
      boatCnt++;
    } else {
      resultIdx.push(i, pair);
      boatCnt++;
    }
  }

  function checkMin(arr) {
    const [rest, cnt, idx] = arr;
    let min = rest;
    let pair = -1;
    for (let i = 0; i < people.length; i++) {
      if (i === idx) continue;
      if (rest >= people[i]) {
        if (!resultIdx.includes(i)) {
          min = Math.min(rest - people[i], min);
          if (min === rest - people[i]) {
            pair = i;
          }
        }
      }
    }
    return pair;
  }
  return boatCnt;
}

const test = { 1: 3 };
console.log(3 in test);

// 첫번째 풀이 => 테케 모두 통과, 효율성 테케 3/5만 통과
function solution(peoples, limit) {
  let boatCnt = 0;
  let resultIdx = new Map();
  let people = peoples.sort((a, b) => b - a);
  for (let i = 0; i < people.length; i++) {
    if (resultIdx.has(i)) {
      continue;
    }
    const pair = checkMin([limit - people[i], i]);
    if (pair === -1) {
      resultIdx.set(i, 1);
    } else {
      resultIdx.set(i, 1);
      resultIdx.set(pair, 1);
    }
    boatCnt++;
  }

  function checkMin(arr) {
    const [rest, idx] = arr;
    let min = rest;
    let pair = -1;
    for (let i = people.length - 1; i >= 0; i--) {
      if (i === idx) continue;
      if (resultIdx.has(i)) continue;
      if (rest < people[i]) {
        break;
      }

      if (!resultIdx.has(i)) {
        min = Math.min(rest - people[i], min);
        if (min === rest - people[i]) {
          pair = i;
        }
      }
    }
    return pair;
  }
  return boatCnt;
}
