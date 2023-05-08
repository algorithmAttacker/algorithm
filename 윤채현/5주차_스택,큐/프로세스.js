function solution(priorities, location) {
  var answer = 0;
  let queue = [];
  let cnt = 0;
  // ㅎㅎ 효율성 구릴듯... ㅠㅠ index배열을 따로 만들어줬어용 index를 location이랑 매칭해서 찾을라고
  let idx = priorities.map((v, idx) => idx);

  while (priorities.length) {
    // 현재까지의 최고 우선순위를 찾아서 max라는 변수에 넣어줌
    let max = Math.max(...priorities);

    // 현재 우선순위 배열의 첫번째 요소가 max값 보다 작을 때
    if (priorities[0] < max) {
      // 배열의 뒤에 넣어주고, index 배열도 똑같이 적용시켜줌.
      priorities.push(...priorities.splice(0, 1));
      idx.push(...idx.splice(0, 1));
    } else {
      // 현재 첫번째 요소가 location일 때, 몇번째로 실행되는지 return
      if (idx[0] === location) {
        return cnt + 1;
      }
      // 현재 프로세스를 실행시킬 수 있으므로(최고 우선순위) 현재 첫번째 요소를 날려줌.
      idx.shift();
      priorities.shift();
      // count 증가시켜줌.
      cnt++;
    }
  }

  return answer;
}
