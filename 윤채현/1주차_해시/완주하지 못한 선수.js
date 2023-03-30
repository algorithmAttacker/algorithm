function solution(participant, completion) {
  participant.sort();
  completion.sort();
  let ans = "";

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      ans = participant[i];
      break;
    }
  }
  return ans;
}
