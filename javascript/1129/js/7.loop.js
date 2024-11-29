console.log('loop 연결 완료');

/**
 * 반복문
 * 1. for 문
 * 구문
  for ([변수 선언 & 초기값설정] ; [조건식(범위지장)] ; [증감식]) {
    반복 시킬 코드 내용 입력
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(`HELLO ${i}`);
}

// Q1) 1 ~ 5 출력
console.log('Q1) 1 ~ 5 출력');
for (let i = 1; i < 6; i++) {
  console.log(`1 ~ 5 ${i}`);
}

// Q2) 5 ~ 1 출력
console.log('Q2) 5 ~ 1 출력');
for (let i = 5; i > 0; i--) {
  console.log(`5 ~ 1 ${i}`);
}

// Q3) 1 부터 n 까지 합 구하기
console.log('Q3) 1 부터 n 까지 합 구하기');

let n = 10; // 어떤 숫자까지 합을 구할지 대한 변수
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= 10; i++) {
  // sum = sum + i;
  sum += i;
  // console.log(`${sum} ${i}`);
}
console.log(sum);

/**
 * 2. for ~ if 중첩
 *
 * Q4) 1 ~ 20 중에서 짝수 일떄의 합 구하기
 * 간단 실습
 * Hine1) 1 ~ 20 까지 숫자를 반봅
 * Hine2) 현재 반복 숫자가 짝수라면 (변수)에 더라기
 * Hine3) for 문 안에 if 문 조합해 보세요.
 */

console.log('Q4) 1 ~ 20 중에서 짝수 일떄의 합 구하기');
let sum2 = 0; // 짝수의 합 저장할 변수
for (let v = 0; v <= 20; v++) {
  if (v % 2 === 0) {
    // sum2 = sum2 + v;
    sum2 += v;
    // console.log(`${sum2} ${v} 짝`);
  }
}
console.log(sum2);

// while 문

// break 문

// continue 문
