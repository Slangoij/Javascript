// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인 경우 : 거짓인 경우
if (fruit === 'apple') {
    console.log('apple');
} else if(fruit === 'orange') {
    console.log('orange');
} else {
    console.log('!@');
}

fruit === 'apple' ? console.log('orange') : console.log('!@');

let emoji = fruit === 'apple' ? 'ap' : 'orange';
console.log(emoji);