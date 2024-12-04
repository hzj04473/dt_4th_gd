console.log('오늘은 주말일까요? 평일일까요?');

let now = new Date();
let nowDate = now.getFullYear() + '.' + now.getMonth() + '.' + now.getDate();
let nowDay = now.getDay();
// 0: 일요일, 1: 월요일, 2: 화요일, 3: 수요일, 4: 목요일, 5: 금요일, 6: 토요일
// console.log(nowDate);
let nowYoil = ['일', '월', '화', '수', '목', '금', '토'];
switch (nowDay) {
  case 0:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 주말 입니다.`
    );
    break;

  case 1:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 평일 입니다.`
    );
    break;
  case 2:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 평일 입니다.`
    );
    break;
  case 3:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 평일 입니다.`
    );
    break;
  case 4:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 평일 입니다.`
    );
    break;
  case 5:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 평일 입니다.`
    );
    break;
  case 6:
    console.log(
      `오늘 날짜는 ${nowDate} (${nowYoil[nowDay]}) 이며, 주말 입니다.`
    );
    break;

  default:
    break;
}
