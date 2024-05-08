// 함수 내부에서 외부로부터 주어진 인자의 값을  변경하는 것은 개똥이다.
// 상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    console.log(num);
}
const value = 4;
display(value);

function displayObj(obj) {
    obj.name = 'Bob'; // 외부로부터 주어진 인자를 내부에서 변경하는 것이 잘못!!
    console.log(obj);
}
const ellie = { name: 'Ellie'};
displayObj(ellie);
console.log(ellie);

// 올바른 예시
function changeObj(obj) { // 이름부터 변경하는 느낌을 주도록 함수명을 변경하거나
    return { ...obj, name: 'Bob'}; // 반환할 때는 새로운 오브젝트를 만들어 수정하여 만들거나!
}