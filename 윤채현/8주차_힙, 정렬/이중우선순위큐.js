function solution(operations) {
  var answer = [];
  const queue = [];

  operations.forEach((ele) => {
    if (ele === "D 1") {
      if (queue.length !== 0) {
        queue.splice(queue.indexOf(Math.max(...queue)), 1);
      }
    } else if (ele === "D -1") {
      if (queue.length !== 0) {
        queue.splice(queue.indexOf(Math.min(...queue)), 1);
      }
    } else {
      let [, value] = ele.split(" ");
      queue.push(+value);
    }
  });
  queue.sort((a, b) => a - b);
  return queue.length === 0 ? [0, 0] : [queue[queue.length - 1], queue[0]];
}
