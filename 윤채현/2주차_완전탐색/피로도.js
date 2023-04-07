function solution(k, dungeons) {
  var answer = -1;

  const arr = getPermutation(dungeons, dungeons.length);

  let count = [];
  arr.forEach(ele => {
    let user = k;
    let cnt = 0;
    ele.forEach(i => {
      if (i[0] <= user && i[1] <= user) {
        user = user - i[1];
        cnt++;
      }
    });
    count.push(cnt);
  });
  answer = Math.max(...count);
  function getPermutation(arr, selectNumber) {
    const result = [];

    if (selectNumber == 1) {
      return arr.map(v => [v]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map(permutation => [fixed, ...permutation]);

      result.push(...attached);
    });

    return result;
  }
  return answer;
}
