// 정직원과 파트타임직원을 나타낼 수 잇는 클래스 만들기
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 잇다.
// 정직원은 시간당 10000원
// 파트타임직원은 시간당 8000원
class Worker {
    name;
    departName;
    monthlyWorkHour;
    constructor(name, departName, monthlyWorkHour, payRate) {
        this.name = name;
        this.departName = departName;
        this.monthlyWorkHour = monthlyWorkHour;
        this.payRate = payRate;
    }
    get monthlyPay() {
        return this.monthlyWorkHour * this.payRate;
    }
}

class RegWorker extends Worker{
    static #PAY_RATE = 10000;
    constructor(name, department, monthlyWorkHour) {
        super(name, department, monthlyWorkHour, RegWorker.#PAY_RATE);
    }
}
class PartWorker extends Worker{
    static #PAY_RATE = 8000;
    constructor(name, department, monthlyWorkHour) {
        super(name, department, monthlyWorkHour, PartWorker.#PAY_RATE);
    }
}

const worker1 = new RegWorker('peter', 'manage', 100);
console.log(worker1.monthlyPay);
const worker2 = new PartWorker('patric', 'sale', 50);
console.log(worker2.monthlyPay);