function getGene(pose) {
  let [n, p] = pose;
  let stack = [];

  p--;
  while (n > 1) {
    // 역순으로 stack에 0,1,2,3중에 알맞은 숫자를 넣어줌
    // 0 => RR
    // 1,2 => Rr
    // 3 => rr
    stack.push(p % 4);
    n--;
    // 부모의 p를 구함
    p = parseInt(p / 4);
  }

  while (stack.length > 0) {
    num = stack.pop();
    // 부모가 RR이면 RR만 나타날 수 있기때문에 RR을 리턴
    if (num == 0) return "RR";
    // 위와 같음
    if (num == 3) return "rr";
  }
  return "Rr";
}

function solution(queries) {
  return queries.map(getGene);
}
