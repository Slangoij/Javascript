// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a; // -1 * 5
console.log(a);
<<<<<<< HEAD
a = -a;
console.log(a);
=======
console.log(-a);
>>>>>>> a25898ce32a81ec6f0169817c8d78baa4690810e

let boolean = true;
console.log(boolean);
console.log(!boolean);
<<<<<<< HEAD
console.log(!!boolean);

// + : 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); // 0
console.log(+null); // 0 
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
=======

// + 는 숫자가 아닌 타입들을 숫자로 변환
console.clear();

console.log(+true);
console.log(+false);
console.log(+'');
console.log(+null);
console.log(+NaN);
console.log(+undefined);
>>>>>>> a25898ce32a81ec6f0169817c8d78baa4690810e
