// 요소 가져오기!
const div1 = document.getElementById('div1');
console.log(div1);

// #1. 태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// innerText, textContent : 태그가 문자(기호)로 그대로 노출.

console.log('innerText >>>>> ', div1.innerText); // How do yo do
console.log('textContent >>>>> ', div1.textContent); // How do yo do today?

// 1. innerHTML
div1.innerHTML = '여기는 <b>첫번째</b> 태그!';
console.log('innerHTML >>>> ', div1);

// 2. innerText 와 textContent
// # 공통점 (= 쓰기)
// - 둘 모두 텍스트를 추가한다.

div1.innerText = '여기는 <b>두번째</b> 태그';
console.log('innerText >>>> ', div1);

div1.textContent = '여기는 <b>세번째</b> 태그';
console.log('textContent >>>> ', div1);

// # 차이점 (= 읽기)
// innerText = HTML 태그를 해석하지 x, 보여지는 텍스트만 그대로
// textContent = HTML 태그를 포함하여 처리.

// #2. 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값) => 속성 값을 '설정'
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

const owl = document.getElementById('owl');
owl.setAttribute('src', '../../css/1127/bootstrap/image/Owl_image.png');

// getAttribute(속성명) => 속성 값 '얻기'
console.log(document.getElementById('owl').getAttribute('src')); // ../../css/1127/bootstrap/image/Owl_image.png

// +) 참고1. 속성 접근 (.) 연산자로도 가능.
console.log(document.getElementById('owl').id); // owl

// +) 참고2. 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#'; // 내부 앵커 / 현재 페이지의 상단으로 스크롤
console.log(document.getElementById('naver').href); // http://127.0.0.1:5502/04-js-dom/04_dom.html#

// #3. CSS 지정.
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열 (NodeList)
console.log(list); // [li, li#hoon, li, li, li]

// 1) style 속성
// - DOM 요소의 인라인 스타일을 지정할 수 있도록 제공되는 속성.
// - style.XXX (XXX: camelCase)
list[0].style.backgroundColor = 'purple'; //  background-color: ;
list[0].style.fontSize = '20px';
list[0].style.color = 'white';

// 반복문 사용해서 적용 (list 배열에 포함된 모든 요소)
for (let li of list) {
  li.style.backgroundColor = 'red';
  li.style.fontSize = '40px';
  li.style.color = 'yellow';
}

// 2) classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (T / F)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1')); // false
h1.classList.toggle('add-h1');

console.log('-------------------------');

// #4. 요소 찾기. (다른 노드에 접근)
// 계층 구조 (형제, 자식, 부모, 조상, 자손)

const friends = document.querySelector('#friends');
const hoon = document.querySelector('#hoon');

// 1. 자식요소
console.log(friends.children); // 유사배열,
console.log(friends.children[0]);

// 2. 부모 요소
console.log(hoon.parentNode);
console.log(hoon.parentNode.parentNode);

//3. 형제요소
console.log(hoon.previousElementSibling);
console.log(hoon.nextElementSibling);
console.log(hoon.nextElementSibling.nextElementSibling);

const container = document.querySelector('.container');
console.log(container);
const p = document.createElement('p');
console.log(p);

p.innerText = '새로 추가된 p 요소 입니다.';
p.style.fontWeight = 700;
p.style.backgroundColor = 'skyblue';
console.log(p);
div1.appendChild(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');

p2.innerHTML = 'p2';
p3.innerHTML = 'p3';

// console.log(p2);
// console.log(p3);
p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3);

const li1 = document.createElement('li');
li1.textContent = '횐둥이';

friends.prepend(li1);

const li0 = document.createElement('li');
li0.innerHTML = '<b>짱구 친구들을 소개 합니다.</b>';
friends.prepend(li0);

hoon.before(li1);
hoon.after(li1);