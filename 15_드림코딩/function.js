// Lesson 05. 2024.03.05. Tue.

// <Function>
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or caculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing 한 함수에 한가지 일만 지정
// naming: doSomething, command, verb 명령, 동사의 형태
// e.g. createCardAndPoint -> createCard, createPoint 세분화시키는게 좋음
// function is object in JS
function printHello() {
  console.log('hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('hello ~ !');
log(1234);


// 2. Parameters
// premitive parameters: passed by value (메모리에 value가 그대로 저장되어 있기 때문에 value가 전달)
// object parameters: passed by reference (메모리에 ref가 저장되 있기 때문에 ref가 전달)
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  // if (from === undefined) {
  //   from = 'unKnown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }   // 첫번째 방법

  for (const arg of args) {
    console.log(arg);
  }  // 두번째 방법

  args.forEach((arg) => console.log(arg));  // 세번째 방법
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope
let globalMesssage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // Local variable
  console.log(globalMesssage);
  function printAnother() {
    console.log(message);
    let childMessage = 'Hello';
  }
  // console.log(childMessage); //error
  return undefined; //생략 가능
}
printMessage();


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1,2); 
console.log(`sum: ${ sum(1, 2)}`);


// 7. Early return, early exit (현업 팁!)
// bad coding
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

//good coding
function upgradeUser(user) {
  if (user.point <= 10) {
    return;       // 조건이 맞지 않을때는 빨리 return 해서 함수를 종료하고 조건이 맞을때만 필요한 로직 실행하게...
  }
  // long upgrade logic...
}



// <First-class function>
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') { 
    printYes();
  } else {
    printNo();
  }
}

// anonymous function 익명함수
const printYes = function () {  
  console.log('yes!'); 
};

// named function
// better debugging in debugger's stack traces 
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// <Arrow function>
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a, b) => {
  // do somthing more
  return a * b;
}



// <IIFF> : Immdiately Invorked Function Expression
(function hello() {
  console.log('IIFE');
})();



// Fun quiz time
// function caculate(comand, a, b)
// command: add, substract, divide, multiply, remainder
