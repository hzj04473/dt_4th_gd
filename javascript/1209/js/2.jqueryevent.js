console.log('jquery event');

/**
 * jQuery 이벤트 메소드 기본 구조
 * $(선택자).이벤트메소드(핸들러);
 *
 * 선택자 : 이벤트 바인딩할 새당 요소 선택
 * 이벤트 메소드 : 실행될 이벤트 종류를 지정
 * 핸들러 : 이벤트가 발생했을떄 실행된 함수
 *
 * - 이벤트를 지정된 선택자에 직접 바인딩
 * - 간편하고 직관적
 *
 * * 단점
 * - 동적 요소에 대한 이벤트 바인딩이 불가능!
 * ex) 페이지 로드 후, 동적으로 버튼이 추가 되었을떄
 * 추가된 버튼에는 이벤트가 안먹힘
 */

/**
 * * .on() 메소드 기본 구조
 * $(선택자).on(이벤트, 자식선택자, 핸들러)
 *
 * 이벤트 : 이벤트 종류
 * 자식선택자(옵션) : 이벤트를 위임할 자식 요소
 * 핸들러 : 이벤트가 발생했을떄 실행될 함수
 *
 *
 * - 하나의 메소드로 모든 이벤트를 처리할 수 있다.
 * -더 강력한 이벤트 바인딩 메소드
 * - 동적으로 생성된 요소에도 이벤트 바인트을 할 수 있음
 */

// #1. Lode Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom 트리가 완성되면 실행되는 이벤트(js)');
});

$('document').ready(function () {
  console.log('ready - 문서의 dom 트리가 완성되면 실행되는 이벤트(jQuery)');
});

$(function () {
  console.log('안녕?');
});

// - $(document).ready()
// - jQuery 에서 제공되는 문서 준비 이벤트
// - 브라우저가 dom 트리를 모두 생성한 후에 실행
// - 즉 dom 이 준비되었을떄 js 코드가 실행되도록 보장.

// #2. Mouse Event
// in js
// Q) 'p-msg' 라는 클래스를 가진 요소를 선택하고, 'click' 이벤트를 사용.
// color를 red로 바꿔 보세요.

$('.p-msg').click(function (e) {
  // $('.p-msg').css('color', 'red');
});

$('.p-msg').on('click', function (e) {
  $('.p-msg').attr('style', 'color:red');
});

// $('.num').click(function () {
//   $(this).css('color', 'green');
// });

// $('.num').on('click', function () {
//   $(this).attr('style', 'color:green');
// });

$(function () {
  const nums = document.querySelectorAll('.num');

  nums.forEach((el, i) => {
    console.log(el, i);
    el.addEventListener('click', function (e) {
      // el.style.color = 'red';
      // console.log(this);
      // this.style.color = 'skyblue';
      console.log(e.target);
      e.target.style.color = 'skyblue';
    });
  });
});

$('.numbers').mouseover(function () {
  // $(this).css('background-color', 'skyblue');
  // $(this).append('<div>handler for basic</div>');
});

$('.numbers').on('mouseover', function () {
  $(this).attr('style', 'background-color:silver');
  $(this).append('<div>on handler for basic</div>');
});

// hover()

$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// $(window).scroll(function (e) {
//   console.log('scrolling !!!!!');
// });

$(window).on('scroll', function (e) {
  console.log('on scrolling !!!!! on()');
});

$('.input-key').on('keydown', function (e) {
  // console.log(e.code);
  // console.log(e.key);

  if (e.code === 'ArrowUp') {
    console.log('위');
  } else if (e.code === 'ArrowDown') {
    console.log('아래');
  } else {
    console.log('나머지 키');
  }
});

// $('#todo-form').on('submit', function (e) {
//   e.preventDefault();

//   const todo = $('input[name=todo]').val();
//   // console.log(todo);
//   // $('.todos').append(`<li>${todo}</li>`);
//   $('.todos').append(`<li>${todo}</li>`);

//   $('input[name=todo]').val('');
// });

let todoForm = document.querySelector('#todo-form');
console.log(todoForm);
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let todo = document.querySelector('input[name=todo]').value;
  // console.log(todo);
  // $('.todos').append(`<li>${todo}</li>`);

  const li = document.createElement('li');
  li.innerHTML = todo;

  document.querySelector('.todos').appendChild(li);

  document.querySelector('input[name=todo]').value = '';
});

// e.preventDefault() 또 다른 예제

$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a 태그의 기본 동작을 막음
  // a 태그의 클릭 이벤트에 대해서 기본 동작은
  // href 에 연결되어 있는 링크로의 이동

  $('#text').append('이 링크는 동작하지 않음!');
});

const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColr() {
  this.style.backgroundColor = 'royalblue';
}

function setBgColr2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  console.log(btn);
  // 1. 익명 함수로 이벤트 핸들러 정의 (this 이용)

  // 2. 함수 참조를 통한 이벤트 핸들러 정의
  // - setBgColor 함수가 호출 될떄, 이벤트가 발행한 DOM 요소가 'this'
}
