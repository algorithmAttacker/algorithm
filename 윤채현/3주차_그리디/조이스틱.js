function solution(name) {
  var answer = 0;
  name = name.split("");
  let sum = 0;

  name.forEach(ele => {
    const diff = changeAlphabet(ele);
    sum = sum + diff;
  });

  let resultCnt = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let nextCnt = i + 1;

    while (
      nextCnt < name.length &&
      name[nextCnt].charCodeAt(0) === "A".charCodeAt(0)
    ) {
      nextCnt = nextCnt + 1;
    }

    resultCnt = Math.min(resultCnt, i * 2 + name.length - nextCnt);
  }

  answer = answer + sum + resultCnt;
  return answer;
}

function changeAlphabet(Al) {
  const Z = "Z".charCodeAt(0);
  const A = "A".charCodeAt(0);
  const AL = Al.charCodeAt(0);

  const diff = Math.abs(A - AL) > 13 ? Math.abs(Z - AL) + 1 : Math.abs(A - AL);
  return diff;
}

function solution(name) {
  var answer = 0;

  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let tmp = name.charCodeAt(i);

    if (tmp < 78) {
      answer += tmp % 65;
    } else {
      answer = answer + 91 - tmp;
    }

    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
      nextIndex += 1;

    min = Math.min(min, i * 2 + name.length - nextIndex);
  }
  answer = answer + min;
  return answer;
}

// 맞는 풀이
function solution(name) {
  var answer = 0;

  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let tmp = name.charCodeAt(i);

    if (tmp < 78) {
      answer += tmp % 65;
    } else {
      answer = answer + 91 - tmp;
    }

    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
      nextIndex += 1;

    if (i == 0) min = Math.min(name.length - nextIndex, min);
    else min = Math.min(2 * i + name.length - nextIndex, min);

    // 처음부터 뒤로 가는 경우
    if (i == 0) min = Math.min(min, name.length - nextIndex);
    else min = Math.min(min, i + (name.length - nextIndex) * 2);
  }
  answer = answer + min;
  return answer;
}
