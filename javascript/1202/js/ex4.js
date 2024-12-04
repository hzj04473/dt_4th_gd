console.log('배열과 반복문 실습');

console.log('1~100 배열생성');
let arrs = [];

for (let i = 0; i <= 100; i++) {
  arrs[i] = i;
}
console.log(arrs);

console.log('---- For 문 ----');
let for_sum = 0;
for (let a1 = 0; a1 < arrs.length; a1++) {
  // console.log(arr[a1]);
  for_sum = for_sum + arrs[a1];
}
console.log(for_sum);

console.log('---- For of 문 ----');
let forOfSum = 0;
for (arr of arrs) {
  forOfSum = forOfSum + arr;
}
console.log(for_sum);

console.log('---- ForEach 문 ----');

let forEachSum = 0;
arrs.forEach(function (arr, i) {
  forEachSum = forEachSum + arr;
});
console.log(forEachSum);
