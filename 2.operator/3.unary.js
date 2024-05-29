// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);

let boolean = true;
console.log(boolean);
console.log(!boolean);

// + 는 숫자가 아닌 타입들을 숫자로 변환
console.clear();

console.log(+true);
console.log(+false);
console.log(+'');
console.log(+null);
console.log(+NaN);
console.log(+undefined);
