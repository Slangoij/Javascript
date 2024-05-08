// 클래스 class
class Fruit {
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '＠');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '◎');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// obj은 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name: 'ellie'};