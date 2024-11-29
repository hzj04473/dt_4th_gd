console.log('conditional 실습');

function isAge() {
  const age = prompt('나이를 입력해 주세요', 10);

  if (age >= 20) {
    return '성인';
  } else if (age > 14 && age <= 17) {
    return '고딩';
  } else if (age > 8 && age <= 14) {
    return '중딩';
  } else if (age > 0 && age <= 8) {
    return '초딩';
  } else {
    return '유아';
  }
}

const result = isAge();
console.log(result);
