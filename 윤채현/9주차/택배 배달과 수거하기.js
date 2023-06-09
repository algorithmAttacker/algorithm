// 구글링했어요 히힛.. 대부분 그리디로 푸는거같슴다
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  // 뒤에서부터 배달/수거함.
  let deliveriesIndex = n - 1;
  let pickupsIndex = n - 1;

  while (deliveriesIndex >= 0 || pickupsIndex >= 0) {
    // 현재까지 배달한 cap의 수
    let deliver_cap = 0;
    // 현재까지 픽업한 cap의 수
    let pickup_cap = 0;

    // 배달과 픽업을 진행해야 할 장소 중 제일 멀리 있는 index를 계산
    while (deliveries[deliveriesIndex] == 0) {
      deliveriesIndex--;
    }

    while (pickups[pickupsIndex] == 0) {
      pickupsIndex--;
    }

    // 왕복 거리이므로 *2 해줌
    answer += Math.max(deliveriesIndex + 1, pickupsIndex + 1) * 2;

    for (let i = deliveriesIndex; i >= 0; i--) {
      // 현재 배달한 개수와 현재 배달해야할 개수가 cap보다 작을때
      if (deliver_cap + deliveries[i] <= cap) {
        // console.log('deliver_cap : ', deliver_cap);
        // console.log(`${i}번째` ,deliveries[i]);
        // 배달 완료 후 deliver_cap을 갱신
        deliver_cap += deliveries[i];
        // 없으니까 0
        deliveries[i] = 0;
        // 인덱스 줄여줌
        deliveriesIndex--;
      } else {
        // 현재 배달한 개수에서 cap을 빼주고 현재 값을 더해줌(마저 배달하지 못한 남은 택배 개수 저장)
        deliveries[i] = deliver_cap - cap + deliveries[i];
        deliveriesIndex = i;
        break;
      }
    }

    for (let i = pickupsIndex; i >= 0; i--) {
      if (pickup_cap + pickups[i] <= cap) {
        // console.log('pickup_cap : ', pickup_cap);
        // console.log(`${i}번째` ,pickups[i]);
        pickup_cap += pickups[i];
        pickups[i] = 0;
        pickupsIndex--;
      } else {
        pickups[i] = pickup_cap + pickups[i] - cap;
        pickupsIndex = i;
        break;
      }
    }
  }

  return answer;
}
