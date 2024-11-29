console.log('conditonal js 연결 성공');

// 조건문
/**
 * 어떤 조건에 따라 논리 구조를 나눔.
 * 각 조건을 '분기' 라도도 함
 * 조건에 따라 서로 다른 문장을 실행함
 */

// 1. if 문
// if (조건문) {조건식이 참이라면 문장을 실행함}

// #1. 단일 if문 (if 1개)
if (5 > 3) {
  console.log('옳다.');
}

let number = Number(prompt('숫자를 입력해 주세요!'));
// 1. prompt()로 사용자로부터 값을 입력 받고
// 2. number() 문자열 -> 숫자형 형변환

// #2. if ~ else 문
if (number > 10) {
  console.log('입력한 수는 10 보다 크다');
} else {
  console.log('입력한 수는 10 보다 작거나 같다.');
}

// #3. if ~ else if ! else 문
if (number > 10) {
  console.log('입력한 수는 10 보다 크다');
} else if (number === 10) {
  console.log('입력한 수는 10 이다.');
} else {
  console.log('입력한 수는 10 보다 작다.');
}

// #4. if ~ else if *n ~ else 문
// else는 한번만 사용 가능
// else if 는 여러개 사용 가능

if (number > 100 || number < 0) {
  console.log('0 ~ 100 사이의 숫자자를 입력하세요!');
} else if (number >= 90) {
  console.log('A');
} else if (number >= 80) {
  console.log('B');
} else if (number >= 70) {
  console.log('C');
} else if (number >= 60) {
  console.log('D');
} else {
  console.log('F');
}

// #5. 중첩 if문
let userId = 'user01';
let userPw = '1234';

// id, pw 검사하는 함수
function loginUser() {
  let inputId = prompt('아이디 입력');
  let inputPw = prompt('비밀번호 입력');

  // Q) userId와 inputId 가 같다면?
  // - userPw와 inputPw 를 비교

  // Q) inputId에 빈값이 입력이 됐다면?
  // - '아이디 입력 안함' 문구를 반환

  // Q) 두 경우가 아니라면 (inputId 가 틀렸을 떄)
  // - '아이디 틀림' 문구 반환.

  if (userId === inputId) {
    if (userPw === inputPw) {
      return '로그인 성공';
    } else {
      return '비밀번호 오류! 로그인 실패!';
    }
  } else if (inputId === '') {
    return '아이디 입력 안함';
  } else {
    return '아이디 오류! 로그인 실패!';
  }
}
const result = loginUser();
console.log(result);
