function solution(genres, plays) {
  let genre = new Map();

  genres.forEach((ele, idx) => {
    genre.set(idx, [ele, plays[idx]]);
  });

  let cnt = {};

  genre.forEach(item => {
    if (cnt[item[0]]) {
      cnt[item[0]] = cnt[item[0]] + item[1];
    } else {
      cnt[item[0]] = item[1];
    }
  });

  let temp = [...genre.entries()].map(ele => [
    ...ele[1],
    cnt[ele[1][0]],
    ele[0],
  ]);

  temp.sort((a, b) => {
    if (a[2] > b[2]) {
      return -1;
    } else if (b[2] > a[2]) {
      return 1;
    } else {
      return 0;
    }
  });

  temp.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] !== b[1]) return b[1] - a[1];
      else return a[3] - b[3];
    }
  });

  let curCnt = 0;
  let prevGenre = "";
  let ans = [];
  temp.forEach((item, idx) => {
    if (curCnt !== 2 && item[0] !== prevGenre) {
      console.log(item[0], prevGenre);
      ans.push(item[3]);
      curCnt++;
    }
    if (curCnt === 2) {
      prevGenre = temp[idx - 1][0];
      curCnt = 0;
    }
  });

  return ans;
}
