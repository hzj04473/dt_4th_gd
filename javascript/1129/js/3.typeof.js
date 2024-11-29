console.log('typeof 연결');

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
const cat = {
  name: '장화',
  age: 10,
  isCute: true,
  mew: function () {
    return '먕';
  },
};

// typeof : 자료형을 확인할 수 있는 키워드
// * 구문
// - typeof X (X는 어떤 무언가?)
console.log(typeof '문자');
console.log(typeof 1234);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
// js의 초기 구현 중 하나로써, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설꼐상의 오류

console.log(typeof undefined);
console.log(typeof fruits);
console.log(typeof cat);
