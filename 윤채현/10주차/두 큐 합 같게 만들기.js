// 구글링해서 풀었어요 투포인터 꽤나 생소하다 ..! 그래도 이해 완료
function solution(queue1, queue2) {
  var answer = -2;

  // 투 포인터를 움직여 계산할 queue를 선언
  let queue = [...queue1, ...queue2];
  // 목표 값(전체 합/2)
  let goal = getSum(queue) / 2;
  // queue1의 합을 기준으로 정답을 리턴할것이므로 queue1의 합을 변수에 넣어줌
  let sum = getSum(queue1);

  // 포인터 두개 선언. 하나는 queue1의 pointer, 하나는 queue2의 pointer이므로
  // queue는 선입선출인것을 고려해서 가가 배열의 첫번째 인덱스로 넣어줌
  let pointer1 = 0;
  let pointer2 = queue1.length;

  // 리턴할 정답 변수 선언
  let cnt = 0;

  // for문의 종료 시점이 queue1.length*3인 이유는 (추측)
  // pointer1은 0~queue.length 만큼 순회 할 수 있고(queue1.length*2)
  // pointer2는 queue1.length~queue.legnth 만큼 순회 할 수 있으므로(queue1.length)
  // 총 queue1.length*3
  for (cnt = 0; cnt < queue1.length * 3; cnt++) {
    // 갱신된 sum이 goal과 같으면 그게 최소 작업 횟수이므로 cnt변수값을 리턴
    if (sum === goal) {
      return cnt;
    }
    // sum이 goal보다 작으면 queue2의 첫번째 원소를 추출해서 queue1에 추가하는 것으로 간주
    // pointer2(queue2 배열의 시작점)의 값을 sum에 더해줌(queue1에 추가했다고 간주)
    // queue2의 시작점을 바꿔줌(pointer2++;)
    if (sum < goal) {
      sum += queue[pointer2];
      pointer2++;
    } else {
      // sum이 goal보다 클 경우 queue1의 첫번째 원소를 빼줌
      // queue1의 시작점을 바꿔줌(pointer1++;)
      sum -= queue[pointer1];
      pointer1++;
    }
  }

  return -1;
}

const getSum = (arr) => arr.reduce((stack, ele) => stack + ele, 0);
