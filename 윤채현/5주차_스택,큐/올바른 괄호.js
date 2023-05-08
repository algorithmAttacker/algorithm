function solution(s) {
  var answer = true;
  s = s.split("");
  let len = s.length;
  let curLeft = 0;

  // 예외상황 1.  ( 또는 ) 둘 중 하나라도 포함하고 있지 않으면 false를 리턴해줌.
  if (!s.includes("(") || !s.includes(")")) {
    return false;
  }

  // 예외상황 2. 처음 나온 괄호가 )일 때, 열린 괄호가 없으므로 괄호를 완성시킬 수 없음.
  if (s[0] === ")") {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (s[i] === "(") {
      // 현재 index의 값이 (일 때, 현재 열린 괄호의 개수 count를 증가 시킴.
      curLeft++;
      continue;
    } else if (s[i] === ")") {
      // 그렇지 않고, 현재 열린 괄호의 개수가 1개 이상일 때, 열린 괄호의 개수를 감소 시킴.
      if (curLeft > 0 && i > 0) {
        curLeft--;
      }
    }
  }

  // 열린 괄호의 개수가 0일때, 올바른 괄호를 완성시킬 수 있음.
  return curLeft === 0;
}
