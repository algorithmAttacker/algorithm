function solution(input) {
  // 3:50~5:16
  // 고려사항 1. 모든 알파벳이 1번씩 나와서 N을 리턴
  // 고려사항 2. 알파벳이 1번만 나와서 외톨이 없음. => 맵으로 횟수를 세자
  // 고려사항 3. 떨어져 있어서 외톨이 있음.
  // 고려사항 4. 모든 알파벳이 외톨이가 아님.

  // 모든 알파벳이 하나씩 있을때는 'N'을 ealry return
  input = input.split("");
  let set = new Set(input);
  if (set.size === input.length) return "N";

  // 정답을 넣어줄 set과 각 알파벳의 개수를 세어줄 cntMap 변수 선언
  let ansSet = new Set();
  let cntMap = new Map();

  // input에 들어간 알파벳별로 개수를 카운트해줌
  input.forEach((ele) => {
    if (!cntMap.get(ele)) {
      cntMap.set(ele, 1);
    } else {
      cntMap.set(ele, cntMap.get(ele) + 1);
    }
  });

  // 지금까지 연속된 알파벳을 기록하기 위한 변수
  let curStr = input[0];
  // 연속된 개수를 카운트해주기 위한 변수
  let curCnt = 1;

  for (let i = 1; i < input.length; i++) {
    // 현재 연속되고 있던 알파벳을 카운트한 횟수가 map에 기록된 횟수와 같으면 외톨이 없음
    if (cntMap.get(curStr) === curCnt) {
      // input[i]로 갱신해줌
      curStr = input[i];
      curCnt = 0;
    }
    if (curStr === input[i]) {
      // 현재 연속된 횟수 ++
      curCnt++;
    } else {
      // 연속되고 있던 알파벳과 현재 알파벳이 다르면 외톨이 발생. 정답 set에 넣어줌
      ansSet.add(curStr);
      // input[i]로 갱신
      curStr = input[i];
      curCnt = 1;
    }
  }

  let result = new Array(...ansSet);

  if (result.length == 0) {
    return "N";
  }
  return result
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    })
    .join("");
}
