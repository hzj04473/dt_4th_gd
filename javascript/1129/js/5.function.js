console.log('function 연결 완료');
// 함수
// 특정작업을 수행하기 이해 독립적으로 설계된 코드 집합
// keyword : function
// name : 함수이름 - camelCase 로 작성함
// parameter : 함수 선언시 매개변수로 받을 것
// body: 함수 내부 코드 (Scope 라고도 함)

// 용어정리
// - 함수 정의(선엄) : 함수를 "생성"
// - 함수 호출 : 함수를 "사용"

// 함수의 선언 방식
// #1. 명시적 함수 선언 (=함수선언문)
// - 함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감싼다.
// - 스크립트 어디에서든 호술 할수 있다.
// - "funㅊtion" 키워드를 사용하여, 함수를 선언하는 방식이다.
function helloWorld() {
  // 함수정의
  // return 키워드 생략 가능 (반환 값이 없을 경우)
  console.log('Hello, World!');
}
helloWorld(); // 함수호출
function helloWorld2() {
  return 'Hello, World! 2';
}
// helloWorld2()
console.log(helloWorld2());

// return 이란? (반환값)
// : 함수 내부 (body, block) 코드의 "최종결과값"
// 최종결과값을 저장하고, 보관하기 위한 키워드
// return 키워드를 만나면, 함수실행 중단 (return 다음에 코드 더 작성 의미가 없다.)

// #2. 함수 표현식 (Function Expression)
// - 변수에 익명함수를 할당(저장)하는 형태 →JS 에서는 함수도 값이기에 가능함.
// - 변수가 선언된 이후에만 호출 할 수 있다.

// * 익형 함수란?
// - 말 그대로 이름이 없는 함수
const sayHello = function () {
  console.log('Hello');
};

sayHello();
// → 이름을 지정할 수도 있음.
// - 단, 이 결우에는 함수 이름은 내부에서만 사용 가능.
const sayHello2 = function hello() {
  console.log('Hello');
};

// hello(); // Uncaught ReferenceError: hello is not defined

const helloWorld3 = function () {
  // return 생략버장
  console.log('Hello World! 3');
};

helloWorld3();
helloWorld3();
helloWorld3();
// 함수는 "여러번" 호출이 가능하다.

const helloWorld4 = function () {
  // return 생략버장
  return 'Hello World! 4';
};

console.log(helloWorld4());

////////////////////////////////
// 매개변수가 있는 함수는 How?
// 1). 매개변수 1개
// 명시적 함수 선언
function food(text) {
  return text;
}
console.log(food('제육덮밥'));

const drinkPrice = 2000;
console.log(food(drinkPrice)); // 2000

// 2). 매개변수 2개
function music(name, title) {
  // return name + '-' + title;
  return `${name} - ${title}`;
}

console.log(music('G-DRAGON', 'HOME SWEET HOME'));

// 이렇게도 가능
function music2(name, title) {
  console.log(`${name} - ${title}`);
}
music2('악뮤', '후라이의 꿈');

// #3. 화살표 함수 (arrow function) (ES6부터 지원)
// 함수 표현식의 축약형. 간결하게 정의
// 단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능!
// 코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시!
// - 함수명 쓰지 않음.

// * 일반형 (한줄)
function square(x) {
  return x * x;
}

// * 축약형 (한줄)
const square2 = (x) => x * x;
console.log(square2(3));

// ! 일반형 (여러줄)
function triangle(base, height) {
  const area = (base * height) / 2;
  return area;
}

// ! 축약형 (여러줄)
const triangle2 = (base, height) => {
  const area = (base * height) / 2;
  return area;
};

console.log(triangle2(3, 4));

// * 호이스팅(hoisting) → 함수, 변수
// - JS 에서 변수 및 함수 선언이 해당 범위의 맨위로 끌어올려지는 현상
// - "함수 선언문"이 호이스팅
// - 변수에서는 "var"

console.log(`hoisting`);
sayHello5();
function sayHello5() {
  console.log('hoisting hello');
}

// * 정상 출력
// Q) 호이스팅이 쫗은거예요? 나쁜 거예요?
// A) 좋고 나쁘다고는 할수 없다. 코드를 읽기 쉽게 하지만, 혼동할 수 있으므로 주 의해야 함
// 코드의 가독성을 높이기 위해서는 선언을 가능한 상단에 위치시키는 것이 좋다.

// * 함수 표현식
// - 호이스팅 대상이 될수 없음
// - why?
// - 변수에 함수를 할당되기 떄문에 그 이후에만 호출 가능!

// * Uncaught ReferenceError: Cannot access 'sayHello6' before initialization
// sayHello6();

// const sayHello6 = () => {
//   console.log('hello2~~! - 호이스팅 대상이 될수 없음');
// };
const sayHello6 = () => console.log('hello2~~! - 호이스팅 대상이 될수 없음');
sayHello6();
