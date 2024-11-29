console.log('3항연산자(Ternary operator) 실습');

const isNow = () => {
  const nowHour = new Date().getHours();
  return nowHour;
};

console.log('datatype : ' + typeof isNow() + ' 이며 ', isNow());
const result = isNow() < 12 ? '오전' : '오후';

console.log(`현재 시는 ${isNow()} 이며 ${result} 입니다.`);
