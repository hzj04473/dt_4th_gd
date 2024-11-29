console.log('array js 연결 완료');

// 6. 배열 (array)
// 배열의 이름 : fruits
// 배열의 료소(아이템) : 배열안에 있는 데이터 하나라나
// 배열의 위치(인덱스) : 0부터 시작 - zero based numbering
// 배열의 길리(크기) : 요소의 개수와 동일

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(`${fruits}`); // ['orange', 'pineapple', 'grape', 'apple']
console.log(fruits.length);
console.log(fruits[0]); // orange // fruits 배열의 위치가 0인 요소 출력
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// JS에서는 배열 원소의 자료형이 달라도 됨.
// why?
// A) js의 동적 타입 특성으로 인해 유연성 - '느슨한 언어'

const mixedArray = [1, 'demon', true, { name: 'layla' }, null, undefined];
console.log(mixedArray);
('');
// array 안에는 array 들어갈 수 있음 (중첩 가능) → 2차원 배열
const korea = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];

console.log(korea);
console.log(korea.length);
console.log(korea[0]);
console.log(korea[1]);
console.log(korea[2]);
console.log(korea[0][0]); // '가' 출력

// ! 반짜 실습
// * Quiz 1 : '바'만 뽑아 내려면?
console.log(korea[1][2]);

// * Quiz 2 : '가자' 글씨 출력하기
console.log(korea[0][0] + korea[2][2]);

// * Quiz 3 : 3차원 배열에서 숫자 8 출력하기.
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums);
console.log(nums[1][0][1]);
