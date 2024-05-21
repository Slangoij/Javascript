// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replaceStBr2Kw(arr) {
    let newArr = Array.from(arr);
    return newArr.map((item) => {
        if (item === '🍓')  return item = '🥝';
        else                return item;
    });
}
console.log(replaceStBr2Kw(['🍌', '🍓', '🍇', '🍓']));

function replace(arr, from, to) {
    let newArr = Array.from(arr);
    return newArr.map((item) => item === from ? to : item);
}
console.log(replace(['🍌', '🍓', '🍇', '🍓'], '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function cntItem(arr, item) {
    return arr.filter((value) => value === item).length;
}
console.log(cntItem([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function filterByArr(arr1, arr2) {
    return arr1.filter((val) => arr2.includes(val));
}
console.log(filterByArr(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

function biggerAvg(arr, crit) {
    let newArr = arr.filter((item) => item > crit);
    let newArrLeng = newArr.length;
    return newArr.reduce((sum, value) => (sum + value), 0) / newArrLeng;
}
console.log(biggerAvg(nums, 5));

const result = nums //
    .filter((num) => num > 5)
    .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result);