function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

print = num => {console.log(num);};
printDouble = num => {console.log(num * 2);};

iterate(5, print);
iterate(5, printDouble);

// 콜백 실사용 예제
setTimeout(() => {
    console.log('3초 뒤 이 함수가 실행될 거에요');
}, 3000);