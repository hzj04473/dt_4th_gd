console.log('jQuery 연결');

// attr()
function changeAttrJs() {
  // Quiz
  // a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  // a.setAttribute('href', 'https://www.naver.com'); // HTML 속성 값을 설정하는 방법.
  a.href = 'https://www.naver.com'; // DOM 요소의 속성에 직접 접근 하는 방법.
}

function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net/');
}

// text()
function changeTextJs() {
  // 퀴즈
  // p-text 클래스를 갖는 요소를 선택하고, 요소의 텍스트를 임의의 값으로 변경.
  const p = document.querySelector('.p-text');
  p.innerText = 'js로 텍스트 변경함.';
}

function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경함.');
}

// html()
function changeHtmlJs() {
  // 퀴즈
  // p-html 클래스를 갖는 요소 선택하고, <h3>javascript</h3> 로 변경
  const p = document.querySelector('.p-html');
  p.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // Quiz
  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후 // <li></li>
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가 // <li>마지막 자식으로 추가된 js</li>
  li.innerText = '마지막 자식으로 추가된 js';
  // 4. colors 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  colors.append(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>'); // 태그도 적용됨!
}

// prepend()
// function prependJS() {
//     const colors2 = document.querySelector('.colors');
//     const li = document.createElement('li');
//     li.innerText = '첫 자식으로 추가된 js';
//     colors2.prepend(li);
// }

// function prependJquery() {
//     $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
// }

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소 생성한 후
  const li = document.createElement('li'); // <li></li>
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  // 4. li 요소의 color 색깔을 blue 변경
  li.style.color = 'blue';
  // li.setAttribute('style', 'color: blue');
  // 5. green 클래스를 갖는 요소의 '바로 이전 형제 요소'로 li 요소 추가
  green.before(li);
}

function beforeJquery() {
  $('.green').before(
    '<li style="color: blue">green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

// after()
function afterJS() {
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerText = '다음 형제요소로 추가(js)';
  green.after(li);
}

function afterJquery() {
  $('.green').after('<li>다음 형제요소로 추가(jquery)</li>');
}

function removeJs() {
  const li2 = document.querySelector('#li2');
  console.log(li2);
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

function emptyJs() {
  const nums = document.querySelector('ul.nums');
  nums.innerText = '';
}

function emptyJquery() {
  $('.nums').empty();
}

function findParent() {
  // console.log('11');
  console.log(document.querySelector('.child2').parentNode); // 모든 부모 노드 가능
  console.log(document.querySelector('.child2').parentElement); // 부모 "요소"인 것만 가능
  console.log(document.querySelector('html').parentNode); // 부모가 document면 @애쳐ㅡ둣
  console.log(document.querySelector('html').parentElement); // 부모가 document null

  console.log($('.child2').parent());
}

function findParents() {
  // js 없습니다!. 채스
  console.log($('.child2').parents());
}

function findNext() {
  console.log(document.querySelector('.child2').nextElementSibling);

  console.log($('.child2').next());
}

function findPrev() {
  console.log(document.querySelector('.child2').previousElementSibling);

  console.log($('.child2').prev());
}

function findChildren() {
  console.log(document.querySelector('.parent').children);

  console.log($('.parent').children());
}

function addClass() {
  // const hi = document.querySelector('#hi');
  // hi.classList.add('fs-50');

  $('#hi').addClass('fs-50');
  // console.log($('#hi'));
}
function removeClass() {
  // const hi = document.querySelector('#hi');
  // hi.classList.remove('fs-50');

  $('#hi').removeClass('fs-50');
}
function hasClass() {
  // const hi = document.querySelector('#hi');
  // console.log(hi.classList.contains('fs-50'));

  console.log($('#hi').hasClass('fs-50'));
}
function toggleClass() {
  // const hi = document.querySelector('#hi');
  // hi.classList.toggle('bg-pink');

  $('#hi').toggleClass('bg-pink');
}
