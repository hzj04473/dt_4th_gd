console.log('실습 3 (loop : 0~100 숫자 2 또는 5 배수 총합)연결');

let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    // if (i % 3 === 2) {
    sum += i;
  }
}

document.write(`0~100 숫자 2 또는 5 배수 총합 : ${sum}`);

let i2 = 0;
let sum2 = 0;
while (i2 <= 100) {
  if (i2 % 2 === 0 || i2 % 5 === 0) {
    console.log(i2);
    sum2 += i2;
  }
  i2++;
}

console.log(`0~100 숫자 2 또는 5 배수 총합 : ${sum2}`);
