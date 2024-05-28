// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replaceStBr2Kw(arr) {
    let newArr = Array.from(arr);
    for (let i = 0; i<newArr.length;i++) {
        if (newArr[i] === '🍓') newArr[i] = '🥝';
    };
    return newArr;
}

console.log(replaceStBr2Kw(['🍌', '🍓', '🍇', '🍓']));

// 재사용성 높인 코드
function replace(arr, from, to) {
    let newArr = Array.from(arr);
    for (let i = 0; i<newArr.length;i++) {
        if (newArr[i] === from) newArr[i] = to;
    };
    return newArr;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(array, '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function cntItem(arr, item) {
    let cnt = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === item) cnt++;
    }
    return cnt;
}
console.log(cntItem([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function filterByArr(arr1, arr2) {
    for (let i = 0; i<arr1.length;i++) {
        if (!arr2.includes(arr1[i])) arr1.splice(i, 1);
    }
    return arr1;
}

console.log(filterByArr(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));