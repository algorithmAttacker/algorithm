function solution(begin, target, words) {
  const len = words.length;

  // 예외처리
  if (!words.includes(target)) return 0;

  function BFS(start) {
    const visited = new Array(len + 1).fill(0);
    const queue = [[start, 1]];
    while (queue.length) {
      const [cur, curCnt] = queue.shift();
      visited[cur] = 1;

      if (words[cur] == target) {
        return curCnt;
      }
      for (let i = 0; i < len; i++) {
        if (
          !visited[i] &&
          checkWord(words[i], words[cur]) === begin.length - 1
        ) {
          let newCnt = curCnt + 1;
          queue.push([i, newCnt]);
        }
      }
    }
    return Infinity;
  }

  // 단어 비교해서 같은 문자가 몇개나 있는지 확인
  function checkWord(wordA, wordB) {
    let wordCnt = 0;
    wordA = wordA.split("");
    wordB = wordB.split("");

    for (let i = 0; i < wordA.length; i++) {
      if (wordB.includes(wordA[i])) {
        wordCnt++;
        wordB.splice(wordB.indexOf(wordA[i]), 1);
      }
    }
    return wordCnt;
  }

  // 최솟값 무한대로 초기화
  let min = Infinity;

  // begin 단어에서 1개의 문자만 바꿀 수 있으니까 if문에서 확인
  for (let i = 0; i < len; i++) {
    if (checkWord(words[i], begin) === begin.length - 1) {
      const cnt = BFS(i);
      min = Math.min(BFS(i), min);
    }
  }
  return min;
}
