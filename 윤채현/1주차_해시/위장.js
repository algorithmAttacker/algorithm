function solution(clothes) {
  var answer = 1;
  const map = new Map();

  clothes.forEach(item => {
    const category = item[1];
    if (map.has(item[1])) {
      map.set(item[1], map.get(item[1]) + 1);
    } else {
      map.set(item[1], 1);
    }
  });

  const newArr = [...map];
  console.log(newArr);

  newArr.forEach(ele => {
    console.log(ele);
    answer = answer * (ele[1] + 1);
  });

  answer -= 1;
  return answer;
}
