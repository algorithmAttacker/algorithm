// 예전에 풀었을때 코드
function solution(sizes) {
  sizes.forEach(i => {
    i.sort((a, b) => {
      if (a !== b) {
        return a - b;
      }
    });
  });

  let width = [];
  let height = [];
  sizes.forEach(i => {
    width.push(i[0]);
    height.push(i[1]);
  });

  var answer = Math.max(...width) * Math.max(...height);
  return answer;
}

// 오늘꺼
function solution(sizes) {
  sizes.forEach(ele => {
    ele.sort((a, b) => (a > b ? -1 : 1));
  });
  const maxWidth = Math.max(...sizes.map(ele => ele[0]));
  const maxHeight = Math.max(...sizes.map(ele => ele[1]));

  return maxWidth * maxHeight;
}
