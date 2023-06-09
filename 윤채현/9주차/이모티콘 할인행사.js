function solution(users, emoticons) {
  var answer = [];

  function getPermutation(arr, selectedNumber) {
    const result = [];
    if (selectedNumber === 1) {
      return arr.map((v) => [v]);
    }
    arr.forEach((fixed, index, origin) => {
      const permutations = getPermutation(origin, selectedNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      result.push(...attached);
    });
    return result;
  }
  const permutation = getPermutation([10, 20, 30, 40], emoticons.length);

  let maxSum = 0;
  let maxPlus = 0;

  permutation.forEach((sale) => {
    let discounted = emoticons.map(
      (ele, idx) => (ele * (100 - sale[idx])) / 100
    );

    let sum = 0;
    let plus = 0;

    for (let i = 0; i < users.length; i++) {
      let price = 0;
      sale.forEach((percent, idx) => {
        if (users[i][0] <= percent) {
          price = price + (emoticons[idx] * (100 - percent)) / 100;
        }
      });
      if (price >= users[i][1]) {
        plus++;
      } else {
        sum += price;
      }
    }

    if (maxPlus <= plus) {
      if (maxPlus < plus) maxSum = sum;
      else {
        maxSum = Math.max(sum, maxSum);
      }
      maxPlus = plus;
    }
  });
  return [maxPlus, maxSum];
}
