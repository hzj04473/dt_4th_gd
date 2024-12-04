console.log('실습 2 (loop-구구단)연결');
document.write('<p>실습 2 (loop-구구단)연결</p>');
document.write('<table>');
document.write('<tr>');

for (let x = 2; x < 10; x++) {
  if (x % 6 === 0) {
    document.write('<tr><td>');
  } else {
    document.write('<td>');
  }

  document.write(`<p>-- for 문 ${x}단 --</p>`);

  for (let y = 1; y < 10; y++) {
    let result = x * y;
    document.write(`<p>for 문 : ${x} * ${y} = ${result}</p>`);
  }
  document.write('</td>');
}
document.write('</tr>');
document.write('</table>');

let x1 = 2;
let y1 = 1;
let res = 0;
while (x1 < 10) {
  console.log(`-- while 문 ${x1} 단 --`);
  while (y1 < 10) {
    res = x1 * y1;
    console.log(`while 문 : ${x1} * ${y1} = ${res} `);
    y1++;
  }
  y1 = 1;
  x1++;
}
