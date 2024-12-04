console.log('실습 1 (loop)연결');

num = prompt('10,000까지의 숫자중 13배수 면서 홀수인 숫자를 찾아 봅시다');

if (num <= 10000) {
  if (num % 13 === 0 && num % 2 !== 0) {
    console.log(`입력 받은 수는 ${num} 이며, 13배수 이며, 홀수인 숫자 입니다.`);
  } else {
    console.log(
      `입력 받은 수는 ${num} 이며, 13배수 아니고, 짝수인 숫자 입니다.`
    );
  }
} else {
  console.log('10,000 이하의 숫자를 입력하세요.');
}
