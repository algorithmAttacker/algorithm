// 첫번째 풀이 => 테스트 케이스 두개에서 시간초과
function solution(number, k) {
  var answer = "";
  let numbers = number.split("").map(Number);

  let K = k;
  let idx = 0;

  while (K !== 0) {
    if (numbers[idx] < numbers[idx + 1]) {
      numbers.splice(idx, 1);
      idx--;
      K--;
    } else {
      idx++;
    }
  }
  answer = numbers.join("");
  return answer;
}

// 두번째 풀이 => 다른 사람 풀이 참고하면서 stack으로 품

function solution(number, k) {
  let numbers = number.split("");
  // 스택 배열 하나를 만들어준다.
  const arr = [];
  let K = k;

  // numbers의 숫자 개수만큼 for문을 돌면서
  for (let i = 0; i < numbers.length; i++) {
    // 스택 배열에 있는 마지막 원소보다 numbers 배열의 원소가 더 크면 arr의 원소를
    // pop해준다. while문을 사용해서 numbers배열의 원소가 스택 배열보다 작을 때 까지 반복문을 실행시켜준다.
    // => 스택의 마지막 숫자보다 현재 숫자가 크면 해당 숫자를 제거
    while (numbers[i] > arr[arr.length - 1] && K > 0) {
      arr.pop();
      K--;
    }
    // 다음 원소를 넣어준다.
    arr.push(numbers[i]);
  }
  return arr.slice(0, arr.length - K).join("");
}
