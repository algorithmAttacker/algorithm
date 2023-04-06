function solution(numbers) {
  var answer = 0;
  const numArr = numbers.split("").map((e) => Number(e));
  const output = [];

  const permutation = (permu, rests, output, i) => {
    //nPm 에서 각 m에 대한 값 나옴
    if (rests.length == i) {
      return output.push(permu);
    }
    rests.forEach((e, idx) => {
      const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
      permutation([...permu, e], rest, output, i);
    });
  };

  for (let i = 0; i < numArr.length; i++) {
    permutation([], numArr, output, i);
  }

  const set = new Set(output.filter((e) => e[0] !== 0).map(e=>Number(e.join('')))) 

  const arr = Array.from(set)
  arr.forEach(e=>{
    if(isPrime(e)) answer++;
  })

  return answer;
}

function isPrime(num) {
    var answer = false;
  
    for(var i=2; i<Math.floor(num/2); i++){
        if(num%i === 0){ //중간에 나눠지니 소수 아님 
            return false
        }             
        else if(i === Math.floor((num/2)-1)) { //마지막까지 안나눠지니 소수
            return true
        }
    }
}


console.log(solution("011"))

