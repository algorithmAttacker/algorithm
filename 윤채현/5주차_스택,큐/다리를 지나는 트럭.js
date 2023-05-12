function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  let queue = new Array(bridge_length);

  queue.fill(0);

  while (queue.length > 0) {
    answer++;

    sum -= queue.shift();

    if (truck_weights.length > 0) {
      if (sum + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        sum += truck;
        queue.push(truck);
      } else {
        queue.push(0);
      }
    }
  }
  return answer;
}
