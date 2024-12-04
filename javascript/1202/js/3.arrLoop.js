console.log('Javascript 배열 반복문');

// let members = [1, 2, 3, 4, 5, 6];
// let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];

// console.log(members, fruits);

// for (let i = 0; i < members.length; i++) {
//   console.log(`for members[${i}] : ${members[i]}`);
// }

// for (let member of members) {
//   console.log(`for of member : ${member}`);
// }

// members.forEach((number, index, array) => {
//   console.log(`forEach members[${index}] : ${number} - ${array}`);
// });

/**
 * 배열에서 반복문 사용하기!
 * - 기본 for 문
 * - for ~ of 문
 * - [].forEach() 메소스
 */

/**
 * 배열) for문 사용 이유
 */
const fruits = ['사과', '귤', '바나나', '포도', '망고'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(`---- for문 ----`);
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

console.log(`----------------`);

// Ex)
const arr = [1, 2, 5, 6, 7];

/**
 * #1. 기본 for문
 */
for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

/**
 * #2. for ~ of 반복문
 * - ES6에 도입된 js 반복문 중 하나
 * - 배열이나, 반복 가능한 객체의 요소들을 순차적으로 반복할떄 사용 (순서가 있는 구조 반복에 적합)
 * - 이 반복은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 없다
 * */

const alphabets = ['a', 'b', 'c', 'd'];

for (let alphabet of alphabets) {
  console.log(`alphabet >>> ${alphabet}`);
}

/**
 * - 배열 'alphabets'의 각 요소를 반복하면서 'alphabet' 변수에 순서대로 할당하고
 * 각각 요소에 대해 반복문 블록 실행
 * - alphabets: 배열, 문자열 등등.. 반복 가능한 객체
 * - alphabet : 반복되는 각 항목을 의미. 각 할목에 대해 한번씩 실행(=개발자 정의 변수)
 * - 다만, 변수명이 반복하는 값을 잘 표형할 수 이도록 적절하게 설정하는 것이 좋다
 */

console.log(`----------------`);

/**
 * 3. forEach() 메소스
 * - 배열의 각 요소에 대해 지정된 콜백 함수를 실행 (배열 메소드, 배열에서만 사용 가능)
 * - 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행 할떄 사용
 * - 각 요소에 대해 함수가 호출 될 떄 마다, 해당 요소가 함수의 인자로 전달된다.
 * */

// alphabets.forEach(function (alpha, idx) {
//   // alpha: cuttentValue 를 의미 = 반복하고 있는 현재 요소
//   console.log(`Elememt:${alpha}, Index : ${idx}`);
// });

alphabets.forEach(function (alpha, idx, arr) {
  // alpha: cuttentValue 를 의미 = 반복하고 있는 현재 요소
  // idx : 인덱스
  // arr : forEach()를 호출한 배열
  console.log(`Elememt:${alpha}, Index : ${idx}, arr : ${arr}`);
});

// ex) forEach 사용
nums = [1, 3, 5, 9];
nums.forEach(function (number, i, arr) {
  arr[i] = number * 2;
});
console.log(nums);

console.log(`----------------`);
/**
 * map, filter, find 메소스
 * - 조건에 따라 요소를 변형하거나 선택
 * - "불변성을 유지" 하면서 데어터를 처리 할수 있게 도와줌
 */

/**
 * #1. map()
 * - 배열의 각 요소에 대해 지정된 함수를 호출(실핼)하고, 그 결과로 새로운 배열을 생성
 * - 기존 (원본) 배열은 변하지 않는다.
 */
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log('---- map() ----');
console.log('doubledNumbers >>>', doubledNumbers);
console.log('numbers >>>', numbers);

/**
 * +) 추가 설명
 * 구체적으로 콜백한수는 map() 메소드에 인수로 전달됨
 * 각 요소를 처리하는 함수로써 배열의 각 요소를 순회할때마다 호출
 * 이 골백 함수는 배열의 각 요소를 인자로 받아서, 원하는 작업을 수행하고 그 결과를 반환
 *
 * num은 콜백 함수의 매개변수 이다.
 * - 이는 현재 처리 중인 배열의 요소를 나타낸다.
 * 이 매개변수를 활용하여 각 요소에 대해 원하는 작업을 수행하는 것이다.
 */

/**
 * 2. filter()
 * - 배열의 각 요소에 대해 지정된 함수를 호출(실행)하고
 * 그 결과가 true인 요소들로 이루어진 '새로운 배열'을 생성
 * * 기존 배열은 변하지 않는다.
 */
// const numbers = [1, 2, 3, 4, 5];
const pracNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log('---- filter() ----');
console.log(pracNumbers);
console.log('numbers >>>', numbers);

/**
 * #3. find()
 * - 조건을 만족하는 첫 번쨰 요소 찾기
 * - 배열의 요소를 하나씩 검사하고, 첫번쨰 조건을 만족하는 요소를 찾으면, 즉시 반복 종료
 * - 조건에 만족 -> 해당 요소 반환
 * - 조건에 불만족 -> undefined 반환
 */

const pracNumbers2 = numbers.find(function (num) {
  return num % 2 === 0;
});
console.log('---- find() ----');
console.log(pracNumbers2);
console.log('numbers >>>', numbers);
// 홀수만 있을 경우, -> 조건에 불만족 // undefined

/**
 * + 옵션) 객체에서 반복문 사용하기
 * for ~ in 반복문
 * 객체의 "key" 를 반복할 수 있는 구분
 */

console.log('---- for ~ in 반복문 (체에서 반복문 사용하기) ----');

const dog = {
  name: '태풍',
  gender: 'M',
  info: 'cute',
};

console.log(dog['name']);
console.log(dog['gender']);
console.log(dog['info']);

console.log(dog.name);
console.log(dog.gender);
console.log(dog.info);

for (let key in dog) {
  console.log(`key: ${key}, value: ${dog[key]}`); // 객체의 각 속성(key, value)에 대해 실행할 코드
}
