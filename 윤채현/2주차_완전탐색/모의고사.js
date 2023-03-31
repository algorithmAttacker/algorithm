function solution(answers) {
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const personCnt = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    if (persons[0][i % 5] === answers[i]) {
      personCnt[1]++;
    }
    if (persons[1][i % 8] === answers[i]) {
      personCnt[2]++;
    }
    if (persons[2][i % 10] === answers[i]) {
      personCnt[3]++;
    }
  }

  let result = Object.entries(personCnt);
  const max = Math.max(...Object.values(personCnt));

  result.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else {
      if (a[0] > b[0]) {
        return a[0] - b[0];
      }
    }
  });

  result = result
    .filter(ele => {
      if (ele[1] === max) {
        return ele;
      }
    })
    .map(ele => +ele[0]);

  return result;
}
