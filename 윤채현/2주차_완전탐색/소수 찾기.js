function solution(numbers) {
  // array의 순열 구하기
  function getPermutation(arr, selectedNumber) {
    const result = [];
    if (selectedNumber === 1) {
      return arr.map(ele => [ele]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectedNumber - 1);
      const attatched = permutations.map(permutation => [
        fixed,
        ...permutation,
      ]);
      result.push(...attatched);
    });
    return result;
  }

  // 소수 구하기
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const nums = numbers.split("").map(Number);
  let cnt = 0;
  // map으로 순열 중 이미 같은 값이 소수로 카운트 되었는지 체크
  const map = new Map();

  for (let i = 1; i <= nums.length; i++) {
    const result = getPermutation(nums, i);
    result.forEach(ele => {
      const num = +ele.join("");

      if (isPrime(num) && num !== 0 && num !== 1 && !map.has(num)) {
        cnt++;
        map.set(num, 1);
      }
    });
  }

  return cnt;
}
