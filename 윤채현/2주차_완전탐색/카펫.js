// 첫번째 풀이
function solution(brown, yellow) {
  var answer = [];
  let temp = brown - 4;
  let tempAns = [];
  for (let width = 1; width <= 5000; width++) {
    for (let height = 1; height <= 5000; height++) {
      if (width * height === yellow) {
        change = 1;
        if (width * 2 + height * 2 === temp) {
          if (width > height) {
            answer.push(width + 2);
            answer.push(height + 2);
          } else {
            answer.push(height + 2);
            answer.push(width + 2);
          }
          break;
        }
      }
    }
    if (answer.length) {
      break;
    }
  }

  return answer;
}

// 두번째 풀이
function solution(brown, yellow) {
  let exceptBrown = (brown - 4) / 2;
  let answer = [];

  for (let height = 1; height < exceptBrown; height++) {
    for (let width = 1; width < exceptBrown; width++) {
      if (width * height === yellow && width + height === exceptBrown) {
        answer.push(width + 2);
        answer.push(height + 2);
        return answer;
      }
    }
  }
}
