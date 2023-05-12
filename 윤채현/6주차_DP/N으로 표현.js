// 첫번째 풀이. 괄호가 있는 경우를 고려못함. 테케 55점
function solution(N, number) {
  let min = Infinity;

  function dp(cur, cnt) {
    if (cur[0] === number && cur.length === 1) {
      min = Math.min(min, cnt);
    }

    if (cnt > 8) {
      return;
    }

    const [a, b, ...rest] = cur;

    dp([a + b, ...rest], cnt + 1);
    dp([a - b, ...rest], cnt + 1);
    dp([-a + b, ...rest], cnt + 1);
    dp([-a - b, ...rest], cnt + 1);
    dp([a / b, ...rest], cnt + 1);
    dp([a * b, ...rest], cnt + 1);
    dp([a * 10 + a, ...rest], cnt + 1);
  }

  for (let i = 1; i <= 8; i++) {
    const numArr = new Array(i).fill(N);
    dp(numArr, 1);
  }

  return min === Infinity ? -1 : min;
}

// 구글링해서 보고 이해했어여
function solution(N, number) {
  var answer = 0;
  // 이터러블한 객체를 배열로 만들어줌
  var use = Array.from(new Array(9), () => new Set());
  // N이 number와 같으면 사용횟수가 1회이므로 1 return
  if (N == number) return 1;
  else {
    use.forEach((element, index) => {
      // ex. N이 5라면 index가 2일때 55, index가 3일때 555 를 기본으로 넣어줌.
      if (index !== 0) element.add(Number(String(N).repeat(index)));
      console.log(use);
    });
    // i는 N의 사용 횟수. 8이 최대 횟수이므로 8까지로 범위를 정해줌
    for (var i = 1; i <= 8; ++i) {
      // j가 i보다 작을때까지의 use[i]와 use[j]의 사칙연산 조합들을 연산해서 use의 해당 index set에 저장해줌.
      for (var j = 1; j < i; ++j) {
        for (var first of use[j]) {
          for (var second of use[i - j]) {
            use[i].add(first + second);
            use[i].add(first - second);
            use[i].add(first * second);
            use[i].add(first / second);
          }
        }
      }
      // use[i]가 number를 가지고 있으면 i를 return.
      if (use[i].has(number)) return i;
    }
    return -1;
  }
  return answer;
}
