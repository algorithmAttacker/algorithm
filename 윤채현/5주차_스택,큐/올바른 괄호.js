function solution(s) {
  var answer = true;
  s = s.split("");
  let len = s.length;
  let curLeft = 0;

  if (!s.includes("(") || !s.includes(")")) {
    return false;
  }

  if (s[0] === ")") {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (s[i] === "(") {
      curLeft++;
      continue;
    } else if (s[i] === ")") {
      if (curLeft > 0 && i > 0) {
        curLeft--;
      }
    }
  }

  return curLeft === 0;
}
