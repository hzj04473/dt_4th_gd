// prompt 구문
// result = window.prompt(message, default);

let mathScore = prompt('수학 점수를 입력해 주세요. 기본점수 : 77점', 77);
let engScore = prompt('영어 점수를 입력해 주세요. 기본점수 : 88', 88);

avgScore = (Number(mathScore) + Number(engScore)) / 2;
avgScore2 = (parseFloat(mathScore) + parseFloat(engScore)) / 2;

console.log(`mathScore + engScore = avgScore (${avgScore})`);
console.log(`mathScore + engScore = avgScore2 (${avgScore2})`);
