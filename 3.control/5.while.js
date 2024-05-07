// while(조건) { }
// 조건이 false가 될 때까지 { } 코드를 반복 실행
let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while(isActive) {
    console.log('아직 살아있다!');
    if (i === 1000) {
        break;
    }
    i++;
}

console.log('아직 살아있다!!!!');
do {
    console.log('do-while 아직 살아있다!');
} while (isActive);