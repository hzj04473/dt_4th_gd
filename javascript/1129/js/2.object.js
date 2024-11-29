console.log('object js 연결 완료');

// * 속성
// - 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징.

// * 메소스
// - 함수(funtion)를 값으로 가진다. - 동작이나 행휘.

const cat = {
  name: '장화',
  age: 10,
  isCute: true,
  mew: function () {
    return '먕';
  },
};

console.log(cat); // {name: '장화', age: 10, isCute: true, mew: ƒ}

// 객체(object) 의 속성 (key)에 접근하는 방법
// #1. 점 표기법(.)
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

// #2 대괄호 표기법([])
console.log(cat['name']);
console.log(cat['age']);
console.log(cat['isCute']);
console.log(cat['mew']());

// #3. key 가 변수에 저장되어  있을떄 사용법
const tempVal = 'name';
console.log(cat[tempVal]); // cat['name'] → cat.name 과 동일
