// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 잇는 카운터를 만들기
class Counter {
    #count = 0;
    constructor(count) {
        if (isNaN(count) || count < 0) {
            this.#count = 0;
        }
        else {
            this.#count = count;
        }
    }
    get value() {
        return this.#count;
    }
    add() {
        this.#count++;
        // console.log(this.#count);
    }
}

const cnter = new Counter(0);
cnter.add();
cnter.add();
cnter.add();
console.log(cnter.value);