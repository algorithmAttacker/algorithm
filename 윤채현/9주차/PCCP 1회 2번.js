// 테케 3,8 런타임에러.. 스택오버플로우인거같음

function solution(ability) {
  function getPermutation(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) {
      return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      result.push(...attached);
    });

    return result;
  }

  const numberOfStudents = ability.length;
  const numberOfSubjects = ability[0].length;

  const permutations = getPermutation(
    [...Array(numberOfStudents).keys()],
    numberOfSubjects
  );

  let max = -Infinity;

  for (let i = 0; i < permutations.length; i++) {
    let sum = 0;
    for (let j = 0; j < numberOfSubjects; j++) {
      sum = sum + ability[permutations[i][j]][j];
    }
    max = Math.max(max, sum);
  }
  return max;
}
