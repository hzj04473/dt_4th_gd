console.log('Destructuring assignment 교육');
/**
 * 구조 분할 할달
 * - Es6에 추가된 JS 기능.
 * - 배열이나 객체의 값을 손쉽게 변수로 분해하여 할당 할수 있느 문접
 * - "순서"중요
 * - 코드가 더 간결하고 읽기 쉬어짐
 *
 *
 * 1. 배열의 구조분해 할당
 */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

// 기본 방식
// const one = arr1[0];
// const two = arr1[1];
// const three = arr1[2];
// console.log(one, two, three);

// 구조 분할 할당
// const [one, two, three, four, five] = arr1;
// console.log(one, two, three, four, five);

// #1. 각 변수에 배열의 인덱스 순으로 값 대응
const [five, two, abc, four, one] = arr1;
console.log(one, four, abc, two, five);

// #2. 변수의 값이 undefined 일떄 기본 값 할당 가능.
// + 값이 할당되지 않은 것은 undefined 출력

const [x, y, z, alpha, beta = 'default'] = arr2;
console.log(x, y, z, alpha, beta);

const lists = ['apple', 'grape'];

const [f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);
2;

// #3. 임시 변수 없이 두 변수의 값 교환 가능.
let num1 = 10;
let num2 = 20;

// 기존 방식 (임시 변수 사용)
// 변수 값의 교환, 2개의 변수 값을 교환할떄, 제3의 변수 사용

console.log('before', num1, num2);

let temp = num1; // 10
num1 = num2; // 20
num2 = temp; // 10

console.log('after', num1, num2);

// 구조 분할 할당

console.log('before', num1, num2);
[num2, num1] = [num1, num2];
console.log('after', num1, num2);

/**
 * 2. 겍체의 구조 분할 할당.
 *
 * - 객체의 속성을 개별 변수에 할당할떄 사용.
 *
 */

const obj = {
  title: '소방관',
  content: 'so sad',
  num: 5,
};

// 기존 방식
// . 표기법
console.log(obj.num);
console.log(obj.content);
console.log(obj.title);

// [''] 표기법
console.log(obj['num']);
console.log(obj['title']);

// 객체 구조 분해
// #1. 객체 안의 속성을 변수명으로 사용
// - 기본 값 할당 가능

const { num, title, content, star = 10000 } = obj;
console.log(num, title, content, star);

// 단, 같은 이름(=key name)을 사용해야 한다.
const { a1, b1, c1 } = obj;
console.log(a1, b1, c1); // undefined, undefined, undefined
// undefined : 변수는 할당이 되었지만, 값이 할당이 되지 않았다.

// #2. 콜론(:) 이용해 새 변수명 선언,  원래 값을 새 변수명에 할당 가능
const { num: customNum, title: customTitle } = obj;
console.log(customNum, customTitle); // 5, '소방관'

// 함수 응용
const lectureInfo = {
  name: 'Cording on',
  part: 'web',
  leader: 'demon',
};
console.log(lectureInfo); //{name: 'Cording on', part: 'web', leader: 'demon'}

function getInfo(lecture) {
  const { name, part, leader } = lecture;
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;
  return output;
}

const result = getInfo(lectureInfo);

console.log('result >>>>', result); // result >>>> Cording on 강의는 web 개발을 공부합니다. 수업의 리더는 demon 입니다.
