// Lesson 4. 2024.03.04. mon.

// 1. String concatenation
console.log('1'+ 2);
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`); 

console.log('ellie\'s book'); 
console.log("ellie's book"); 
console.log("ellie's \nbook");  // \n: 줄바꿈
console.log("ellie's \n\tbook");  // \t: 탭 (들여쓰기)



// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(4 / 2); // divide
console.log(2 * 3); // multiply
console.log(5 % 2); // remainder  나누고 나머지 값
console.log(2 ** 3); // exponentiation 2의 3제곱



// 3. Increment(++) and decrement(--) operators 
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrment = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 5. Comparison ( < = ) operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal



// 6. Logical operators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // or는 처음에 true가 나오면 뒤는 상관안함. 더이상 읽지 않음. 연산을 많이 하는 함수를 호출하거나 헤비한 아이를 맨 뒤에 배치하는것이 효율적임

// && (and), finds the first falsy value, and는 null체크용으로 많이 쓰임
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('');
  }
  return true;
}

// ! (not)
console.log(!value1);



// 7. Equality operators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equliity by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // 0은 boolean 타입이 아니라서 false
console.log('' == false); // true
console.log(''=== false); // ''는 boolean 타입이 아니라서 false
console.log(null == undefined); // true
console.log(null === undefined); // false



// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
}
else if (name === 'coder') {
  console.log('You are amazing coder!');
}
else {
  console.log('unknown');
}



// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); 



// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('Love you!');
    break;
  default:
    console.log('same all!');
    break;
}



// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0); 
// 블럭을 먼저 실행하고 싶다면 do while을 써야 하고, 조건문이 맞을 때만 블럭을 실행하고 싶다면 While을 써야함

// for loop, for(begin; condition; step)
for (i = 3; i> 0; i--) {
  console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i-2) {
  // inline variable declaration
  console.log(`inline Variable for: ${i}`);
}

//nested loops --> 가급적 안쓰는게 좋음!
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break(loop를 완전히 끝냄), continue (지금거만 스킵하고 다시 다음 스텝으로 넘어감)
// Q1. iterate from 0 to 10 and print only even numbers(짝수) (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// Better!
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}
// Q2. iterate from 0 to 10 and print numbers until teaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
// labe도 알아보되, 현업에선 사용하지 않음. 