// 문자열 타입
let string = '안녕하세요';
console.log(string);
string = `안녕!`;
console.log(string);
// 이스케이프 표현
console.log('\u09AC');

// 템플릿 리터럴 (Template Literal) ``
let id = 'inje';
let greetings = '안녕!, ' + id + "야!\n즐거운 하루 보내요!";
console.log(greetings);

greetings = `안녕!, ${id}야!\n즐거운 하루 보내요!`;
console.log(greetings);