function solution(today, terms, privacies) {
  var answer = [];
  let map = new Map();

  terms.forEach((ele) => {
    const [term, period] = ele.split(" ");

    map.set(term, Number(period));
  });
  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" ");
    const period = +map.get(term);
    let [year, month, day] = date.split(".").map(Number);
    month = month + period;

    if (month + period > 12) {
      year = year + parseInt(month / 12);
      month = month % 12;
      if (month === 0) {
        year -= 1;
        month = 12;
      }
    }

    if (day === 1) {
      month -= 1;
      day = 28;
      if (month === 0) {
        year = year - 1;
        month = 12;
        day = 28;
      }
    } else {
      day--;
    }
    let [curYear, curMonth, curDay] = today.split(".").map(Number);

    if (curYear > year) {
      answer.push(i + 1);
      continue;
    }
    if (curYear === year && curMonth > month) {
      answer.push(i + 1);
      continue;
    }
    if (curYear === year && curMonth === month && curDay > day) {
      answer.push(i + 1);
      continue;
    }
  }

  return answer.sort((a, b) => a - b);
}
