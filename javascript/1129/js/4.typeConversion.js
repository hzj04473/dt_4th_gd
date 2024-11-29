console.log(`typeConversion 연결`);

// 형변환
// 성적 평균 구하는 프로그램을 만들떄
// prompt() : js에서 사용자로 부터 입력을 받을 떄 사용하는 브라우저 내장 함수

// JS 가 자동형변환 해 준 점수
// let mathScore = prompt('수학점수 입력');
// console.log(`mathScore → ${mathScore}`, typeof mathScore);
// let engScore = prompt('영어 점수 입력');
// console.log(`engScore → ${engScore}`, typeof engScore);

// let avg = (mathScore + engScore) / 2;
// console.log(`수학, 영어 평균정수는 ${avg} 점 입니다.`);

// 명시적 형변환
// #1. String() : 문자로 형변환

let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str1));
console.log(String(str3), typeof String(str1));

console.log(str1.toString(), typeof str1.toString());
console.log(str2.toString(), typeof str1.toString());

// #2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));

console.log(parseInt(n1, 10), typeof parseInt(n1, 10)); // n1 값을 10진수의 정수(int) 로 바꾸겠다 // NaN
console.log(parseInt(n2, 10), typeof parseInt(n2, 10)); // n2 값을 10진수의 정수(int) 로 바꾸겠다 // NaN
console.log(parseInt(n3, 10), typeof parseInt(n3, 10)); // n3 값을 10진수의 정수(int) 로 바꾸겠다 // 123

console.log(parseFloat(n1), typeof parseFloat(n1)); // n1 값을 실수(float)로 바꾸겠다.// NaN
console.log(parseFloat(n2), typeof parseFloat(n2)); // n2 값을 실수(float)로 바꾸겠다.// NaN
console.log(parseFloat(n3), typeof parseFloat(n3)); // n3 값을 실수(float)로 바꾸겠다.// 123.9

// +) null, undefined 를 숫자로 바꾼다면
console.log(Number(undefined, typeof Number(undefined))); // NaN, number
// NaN = Not-A-Number (=숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문!

console.log(Number(null), typeof Number(null)); // 0, number
// null은 숫자 변환 시 논리적으로 "값이 없음"을 나타내는 것으로 간주되어 0으로 처리됩니다.
