console.log('JS 표준객체');

/**
 * JS 표준 내장 객체
 * - 기본적으로 미리 정의된 객체
 * - 모든 JS 환경에서 사용할 수 있는 내장 객체들을 말한다.
 * - 자주 사용되는 기능들을 미리 구현해 놓은 것
 *
 * #1. Date개체 : 시간, 날짜
 *
 * 날짜 생성하여 저장
 */
let now = new Date();
console.log(now); // Wed Dec 04 2024 11:26:50 GMT+0900 (한국 표준시)

// new Date(timeStamp)
let jan_01_1790 = new Date(0);
console.log(jan_01_1790); // Thu Jan 01 1790 09:00:00 GMT+0900 (한국 표준시)

let jan_02_1970 = new Date(24 * 60 * 60 * 1000); // 24시간
console.log(jan_02_1970); // Thu Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
/**
 * 타임스템프 (timestamp)
 * - 특정 시점의 날짜와 시간을 "숫자로 표현한 값"
 * - 보통 "에포크" 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄
 *
 * 에포크?
 * - 특정 시간의 기준점
 * - 1970년 1월 1일 09:00:00 UTC를 기준
 *
 * 왜? 1970년 1월 1일 기준인가요?
 * 1. 역사적인 이유
 * - 유닉스 OS에서 타임스템프를 처음 정의할떄 사용한 날짜(유닉스 시스템이 동장한 시점)
 * - 당시 컴퓨터 시스템의 기준 시간으로 설정된 것
 * 2. 기술적인 편의성
 * - 시간을 숫자로 표현하여 계산하기가 수학적으로 편리함
 *
 * */
//

/**
 * new Date(date_string)
 */

let date1 = new Date('2024-12-04');
console.log('date1 > ', date1); // Wed Dec 04 2024 09:00:00 GMT+0900 (한국 표준시)

let date2 = new Date('2024', '11', '04'); // MM (0 ~ 11) [1월 ~ 12월])
console.log('date2 > ', date2); // Wed Dec 04 2024 00:00:00 GMT+0900 (한국 표준시)

/**
 * * 관련 메소스
 * - 객체 점 접근점
 * getDate() : '월' 의 몇번쨰 날인지 반환
 * getDay() : '주' 의 몇번쨰 날인지 반환
 * getMonth() : 몇 번쨰 달인지 반환 (0부터 시작)
 * getHour() : 시간을 반환
 * getMinute() : 분을 반환
 * getSecond() : 초를 반환
 * getMilliseconds() : 밀리초를 반환 (0 ~ 999)
 * getTime() : 1970년 1월 1일 부터 현재까지의 밀리포 단위의 시간을 반환
 */
console.log(now.getFullYear()); // 2024 - 년도 반환
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getDay()); // 0(일) ~ 6(토)
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime()); // 1675497610000 - 1970년 1월 1일 00:00:00 GMT+0900 (한국 표준시)
console.log('--------------------------------------------------------');

/**
 * Math 객체
 * 수학적인 상수와 함수
 *
 * * 속성
 */
console.log(Math.E); // 2.718281828459045 자연 로그
console.log(Math.PI); // 3.141592653589793 파이
console.log(Math.SQRT2); // 1.4142135623730951 2의 제곱근

// 메소스
console.log(Math.min(100, -2, 0, 5)); // -2 최소값
console.log(Math.max(100, -2, 0, 5)); // 100 최대값
console.log(Math.round(5.3124)); // 5 반올림
console.log(Math.round(5.8124)); // 6 반올림
console.log(Math.ceil(5.8124)); // 6 강제올림
console.log(Math.floor(5.8124)); // 5 강제내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10

// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// Quiz)
// Q1) 1 ~ 100
console.log(Math.floor(Math.random() * 100 + 1));
// Q2) 20 ~ 22
console.log(
  Math.floor(20 + Math.random() * 3),
  typeof Math.floor(20 + Math.random() * 3)
);
