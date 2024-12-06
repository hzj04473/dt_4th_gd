console.log('addeventlistener 연결');

// #1 onXXX 속성으로 등록.
function clickH1() {
  alert('제목 클릭! 함수 이용');
}

// #2. addEventListener

const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.getElementById('container');

btn1.addEventListener('click', function () {
  alert('버튼 1을 클릭하셨습니다.');
});

btn1.addEventListener('mouseover', function () {
  btn1.style.backgroundColor = 'aqua';
  // btn1.setAttribute('backgroundColor', 'aqua');
});

btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'black';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'pink';
  div.innerHTML = 'Hi~!';
  container.appendChild(div);
});

// 함수명을 매개변수로 받아서 실행
btn3.addEventListener('click', changeColor);

function changeColor() {
  const divs = document.querySelectorAll('#container div');
  console.log(divs);
  // let i = 0;
  for (let div of divs) {
    // if (i % 2 !== 0) div.style.backgroundColor = 'blue';
    div.style.backgroundColor = 'blue';
    // i++;
  }
}

btn4.addEventListener('click', changeBtnColor);

function changeBtnColor() {
  console.log(this);
  // console.log(this.parentNode);
  this.style.backgroundColor = 'yellow';
}
