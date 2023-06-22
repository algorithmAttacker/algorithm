function solution(numbers) {
  var answer = [];

  // 노드의 개수를 세어주는 함수
  function nodeCount(binary) {
    // 트리의 depth 변수
    let depth = 0;
    // 노드 개수 카운트 변수
    let cnt = 0;

    while (binary.length > cnt) {
      // 포화이진트리니까 2의 depth승으로 계산해서 더해줌
      cnt += 2 ** depth;
      // depth에 1을 더해줌
      depth += 1;
    }

    return cnt;
  }
  // 루트 노드에 0이 있는지 확인해주는 재귀함수
  function checkTree(binary) {
    // length가 0이면 return true
    if (!binary.length) {
      return true;
    }

    // 중위 순회이므로 parentNode의 인덱스를 구해줌
    const parentNode = Math.floor(binary.length / 2);

    // 부모 노드가 0이고 자식 노드가 1인 경우 false를 리턴
    if (binary[parentNode] === "0") {
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "1") return false;
      }
    }
    // 왼쪽 오른쪽을 나눠서 재귀함수를 실행시켜줌
    let leftTree = binary.slice(0, parentNode);
    let rightTree = binary.slice(parentNode + 1);

    return checkTree(leftTree) && checkTree(rightTree);
  }

  for (const num of numbers) {
    let binary = num.toString(2);

    let cnt = nodeCount(binary);

    binary = binary.padStart(cnt, "0");

    answer.push(checkTree(binary) ? 1 : 0);
  }

  return answer;
}
