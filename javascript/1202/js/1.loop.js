console.log('loop while문');

// 3. while 문
// Ex1)
let idx = 0;

while (idx < 10) {
  console.log('안녕', idx);
  idx += 1;
}

// Ex2) 무한루프
let idx2 = 0;
while (true) {
  console.log('안녕', idx2);
  idx2 += 1;
  // 무한 루프 빠져나오는 조건
  if (idx2 === 10) {
    break;
  }
}

// Ex3) whild 문
let i = 2,
  j = 1;

while (i < 10) {
  while (j < 10) {
    // console.log(i, 'x', j, '=', i * j);
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  j = 1;
  i++;
}

// Q) 1부터 20까지의 홀수 합 구하기

let a = 1;
let a_sum = 0;
while (a <= 20) {
  // if (a % 2 === 1) {
  if (a % 2) {
    console.log(a % 2);
    a_sum += a;
  }
  a++;
}

console.log(`1부터 20까지의 홀수 합은 ${a_sum}`);

let a2 = 1;
let a2_sum = 0;

while (a2 <= 20) {
  // if (a2 % 2 === 0) {
  if (!(a2 % 2)) {
    a2_sum += a2;
  }
  a2++;
}

console.log(`1부터 20까지의 짝수 합은 ${a2_sum}`);

// Q2) 10부터 1까지 역순으로 숫자 출력하기
let a3 = 10;
console.log(`10부터 1까지 역순으로 숫자 출력하기`);
while (a3 >= 1) {
  console.log(a3);
  a3--;
}

// 4. do~while 문
/**
 * while 문과 비슷하지만, 조건을 반복문 실행 후, 확인 후
 * 조건이 참인지 여부에 상관없이 코드 블럭을 취소 한번 실행한 후 조건을 검사합니다.
 * 즉, 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속
 *
 * 구문
 * do { // 실행 코드 내용 } while(조전)
 */

let a4 = 1;
console.log(`do while 문`);
do {
  console.log(a4);
  a4++;
} while (a4 <= 5);

let number;
do {
  // number = parseInt(prompt('숫자를 입력하세요 (10보다 큰 숫자'), 10);
} while (number <= 10);
console.log('입력한 숫자 : ', number);
// 10 보다 작은 수를 입력하면, 조건을 계속해서 만족하기 떄문에 prompt가 반봅 실행됨.

/**
 * 5. break * continue
 * - 반복문에서 사용되는 제어문
 * # break
 * - 반복문을 완전히 중단하고 빠져나옴
 *
 * # continue
 * - 현재 반복을 중지하고 다음 반복으로 넘어감 (이번 회차 건너띄기)
 * */

// Ex) break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`break i >>> ${i}`);
}

// Ex) continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`continue i >>> ${i}`);
}
// 1, 2, 4, 5

// Q) for 문을 활용한 별 찍기
/**
 * 결과 모습)
 *  n = 5 입력
 *      *
 *     **
 *    ***
 *   ****
 * */

/**
 * Hint1) prompt 사용하여 높이를 입력받기 - 10진수의 정수(int) 형으로 형변환 할것
 * Hint1) 각 줄의 내용을 저장할 문자열 변수 만들기
 * Hint1) 문자열 과 문자열을 더한다.
 * Hint1) for 중첩.
 */

// let statNum = parseInt(prompt('별 탑쌓기 별 갯수를 입력해 주세요.', 1), 10);
let statNum = 4;

for (let q = 1; q <= statNum; q++) {
  // console.log(q);
  let blankStar = '';
  for (let b = 1; b <= statNum - q; b++) {
    blankStar = blankStar + ' ';
  }

  for (let s = 1; s <= q; s++) {
    blankStar = blankStar + '*';
  }

  console.log(blankStar);
}

// Q) for문을 활용한 별 찍기.
// 결과 모습)
/**
 * h = 5 입력
 *     *    // i = 1; / j = h-1 = 4 / k = 1
 *    **    // i = 2; / j = h-2 = 3 / k = 2
 *   ***    // i = 3; / j = h-3 = 2 / k = 3
 *  ****
 * *****    // i = 5; / j = h-5 = 0 / k = 5
 */
// Hint 1) prompt 사용해서 높이를 입력 받기. - 10진수의 정수(int)형으로 형변환 할 것.
// Hint 2) 각 줄의 내용을 저장할 문자열 변수 만들기.
// Hint 3) 문자열(" ") 과 문자열(*)을 더한다.
// Hint 4) for문 중첩.

// const h = parseInt(prompt('높이를 입력하세요: '), 10);
const h = 5;
// 별 찍기
for (let i = 1; i <= h; i++) {
  let line = ''; // 각 줄의 내용을 저장할 문자열

  // 공백 추가
  for (let j = 1; j <= h - i; j++) {
    line = line + ' ';
  }
  // line = "    "

  // 별 추가
  for (let k = 1; k <= i; k++) {
    line = line + '*';
  }
  // line = "    *"

  console.log(line);
}
// h = 5 입력 했을 가정)
// i = 1 / j = 1 ~ 4 / k = 1 ====>        *
// i = 2 / j = 1 ~ 3 / k = 2 ====>       **
// i = 5 / j = 0 만족 x / k = 5 ====> *****
