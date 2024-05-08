function add(a, b) {
    return a + b;
}

const result = add(1, 2);
console.log(result);

function print(text) {
    console.log(text);
}
const outcome = print('text');
console.log(outcome); // 의미없다

function print(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
}
print(-1);