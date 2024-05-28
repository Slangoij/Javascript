// Iterable 하다는 건 순회가 가능하다는 것이다
// [Symbool.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 연산자

const array = [1,2,3];
for(const item of array) {
    console.log(item);
}

for(const item of array.values()) {
    console.log(item);
}

for(const item of array.keys()) {
    console.log(item);
}

for(const item of array.entries()) {
    console.log(item);
}

let iterator = array.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);

iterator = array.values();
while(true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}