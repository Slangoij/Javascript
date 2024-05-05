// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a = a + 1;
console.log(a);
a++;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 한고, 후에 값을 증가
// ++a 값을 먼저 증가하고, 필요한 연산 진행
a = 0;
let b = a++;
console.log(b);