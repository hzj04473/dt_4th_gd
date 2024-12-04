console.log('내장 메소드 실습');

let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

console.log('same 만들기');

let sameFrutes = fruits1.filter((fruit1) => fruits2.includes(fruit1));
console.log(sameFrutes);

console.log('diff 만들기');
console.log('--- 1번 ---');
let diffFrutes = [];
let diffFrutes1 = fruits1.filter((fruit1) => !fruits2.includes(fruit1));
let diffFrutes2 = fruits2.filter((fruit2) => !fruits1.includes(fruit2));

for (let i = 0; i < diffFrutes1.length; i++) {
  diffFrutes.push(diffFrutes1[i]);
}

for (let i = 0; i < diffFrutes2.length; i++) {
  diffFrutes.push(diffFrutes2[i]);
}

console.log('1번', diffFrutes);

console.log('--- 2번 ---');

other1DiffFruits = diffFrutes1.concat(diffFrutes2);

console.log('2번', other1DiffFruits);

console.log('--- 3번 ---');
other2diffFrutes = [...diffFrutes1, ...diffFrutes2];
console.log('3번', other2diffFrutes);

console.log('--- 4번 ---');
let other3DiffFruits = [...fruits1, ...fruits2].filter(
  (fruit) => !fruits1.includes(fruit) || !fruits2.includes(fruit)
);
console.log('4번', other3DiffFruits);
