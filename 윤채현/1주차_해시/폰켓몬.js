function solution(nums) {
  const len = nums.length;
  const set = new Set(nums);

  console.log(set);

  if (set.size >= len / 2) {
    return len / 2;
  } else {
    return set.size;
  }
}
