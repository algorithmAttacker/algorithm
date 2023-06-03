function solution(numbers) {
    const answer = numbers
        .map(numbers => String(numbers))
        .sort((a,b) => (b+a) - (a+b)) //a와 b를 갖다붙였을 때를 비교해서 오름차순으로 정렬
        .join('');
    return answer[0] === '0' ? '0' : answer;
}







// const arr = [0, 5, 4, 1, 2];

// function compareFunction(a, b) {
//   console.log(arr);  // 현재 배열 상태 출력
//   console.log(`${a}와 ${b} 비교`);  // 비교 과정 출력
//   return a - b;  // 오름차순 정렬
// }

// arr.sort(compareFunction);  // 정렬 수행
// console.log(arr);  // 최종 정렬 결과 출력
