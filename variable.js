// 1. Use stric
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move, declaration from bottom to top)
// has no block scope
age = 4;
var age;

// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;