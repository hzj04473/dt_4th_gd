console.log('javascript DOM');
console.log('---------------------------');
console.log(document);
console.log(document.childNodes); // document
console.log(document.childNodes['1']); // html
console.log(document.childNodes['1'].childNodes); // [head, text, body]
console.log(document.childNodes['1'].childNodes[2]); // body
console.log(document.childNodes['1'].childNodes[2].childNodes);
// 이렇게 접근하면 너무 불편하니까.. 이렇게 하지 않기 위해서 속성과 메소스
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL); // http://127.0.0.1:5500/javascript/1204/index.html
console.log(document.domain); // 127.0.0.1
/**
 * 취소선이 그려지는 이유
 * 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타남
 * 최신 보안 정책에서는 도에인 사용한 접근 제어 방식이 보안상의 취약할수 있기 떄문에 지향한다.
 * */

/**
 * document 객체를 이용한 HTML
 * #1. 요소 선택
 */

/** 1. getElementById */
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

/** 2. getElementByClassName (HTMLCollection) */
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[2]);

/** 3. getEmementTagName (HTMLCollection) */
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('h1'));

/** 4. getElementByName (NodeList) */
console.log(document.getElementsByName('id'));

/** 5. quertSelection (NodeList) */
// 처음 발견한 하나만 가지고 옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name=id]'));
console.log('--------------------------------------');
/** 6. querySelectorAll (css Selector) (NodeList) */
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name=id]'));
console.log(document.querySelectorAll('div')[0]);
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelectorAll('div')[2]);
console.log(document.querySelectorAll('div')[3]);

console.log('--------------------------------------');

/**
 * * 유사배열 (HTMLCollection, NodeLis)
 * - [] 식으로 생긴 배열과 비슷하지만, 완전히 같지는 않은 객체 - 배열처럼 사용가능
 * - HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션
 * - 배열처럼 Index, length 를 가짐
 * - 그러나, 배열과 달리 사용 가능한 메서드가 제한적
 *
 *
 * #!. HTMLCollection
 * - HTML 문서에서 특정조건에 맞는 요소들을 실시간으로 컨렉션 형태로 반환
 * - 실시간: 문서 내용이 변경되면, HTMLCollection 도 즉시 업데이트
 * - HTML 요소 전용 : 컬렉션에 포함된 항목은 항산 HTML 요소
 * - 배열이 아님 : 배열처럼 인테스로 접근 가능하나 배열 메서드 (forEach, map등) 사용불가
 */

// for 문으로 가능
console.log(document.getElementsByClassName('pink'));
const pinkElements = document.getElementsByClassName('pink');
for (let i = 0; i < pinkElements.length; i++) {
  console.log('pinkElements : ', pinkElements[i]);
}

// HTMLCollection -> forEach() 메서드 사용이 불가
// 반복을 해야 된다. -> array 뱐경 - Array.from() 메서드 사용

/**
 * ** Array.from() 메서드
 * - ES6 에서 도입된 JS 메소드
 * - 유사배열 객체나 반복 가능한 객체 를 실제 배열로 변환하는데 사용
 * - 또한, 배열을 생성하면서, 특정 로직을 적용할수 있음
 *
 *
 * * 구문
 * - Array.from(arrayLike, mapFuntion, thisArgs)
 * - arrayLike : 배열로 변환할 유사배열 객체나 반복 가능한 객체
 * - mapFuntion (선택) : 새 배열의 각 요소에 대해 실행할 매핑 함수
 * - thisArgs (선택): mapFuntion 을 실행할떄 사용할 this 값
 * */

const arrLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrLike);
console.log(array);

const str = 'hello';
const strArray = Array.from(str);
console.log(strArray);

const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]
// _는 단순히 "인뎃그를 이용해 배열을 생성한다"는 의도
// [0,1,2,3,4,]

/**
 * 매개변수 의미
 * 1. (_)
 * - 배열의 각 요소 값을 나타냄
 * - 배열을 생성할떄 초기값은 기본적으로 undefined 이므로, 사용되지 않는 경우가 많음
 * - 사용하지 않을떄 는 관습적으로 _로 표현하여 사용하지 않는 값 임을 명시
 *
 * 2. (i)
 * - 현재 인덱스를 나타냄
 * - 배열의 각위치에서 몇번쨰 요소인지 알려줌
 *
 */

// 4) HTMLCollection 을 배열로 변환
const htmlCollection = document.getElementsByTagName('div');
const array2 = Array.from(htmlCollection);
console.log(array2);
array2.forEach((elem) => console.log(elem));

console.log('--------------------------------------');

/** #2. NodeList
 *
 * - DOM 에서 노드의 그룹을 반환 (텍스트 노드, 주석 노드 포함)
 * - 정적 : getElementsByTagName, querySelectorAll 로 생성한것은 정적
 * - 실시간 : childNodes로 생성한 것은 실시간
 *
 * NodeList => forEach() 반복문이 가능
 */

// forEach() 문
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

console.log('--------------------------------------');

// (실습) for .. of 반복문
const pinkArrs = document.querySelectorAll('.pink');
for (let elem of pinkArrs) {
  console.log(elem);
}

// 모든 요소는 -> 모든 노드가 됩니다.
// 모든 노드가 => 모든 요소가 아닙니다.
