function solution(citations) {
  let hIdx = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIdx = i + 1;
    } else {
      break;
    }
  }
  return hIdx;
}
