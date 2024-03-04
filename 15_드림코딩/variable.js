// Lesson 3. (2024. 03. 04. Mon.)


// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';
console.log(age); // 변수에 대한 정의가 나와있지 않은데도 로그에 오류가 나오지 않고 'undefinded' 나옴. 왜냐하면 뒤에 var로 선언되었기 때문!!!



// 2. Variable (변수)
// let (added in ES6)
let globalName = 'global name'; //글로벌 변수는 프로그램 전체에서 모든 기능에 액세스할 수 있는 모든 기능 외부에 선언되는 변수 유형. 글로벌 변수는 대개 모든 기능 위에 선언되며 프로그램 실행 시간 동안 모든 기능이 조작할 수 있기 때문에 최소로 유지
{
  let name= 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);  
  console.log(globalName);
}
console.log(name); //{}블럭안에 정의되어 밖에서 볼 수 없음
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
// 호이스팅(Hoisting)의 뜻은 영어로 '끌어올리다, 게양하다' 라는 뜻으로 자바스크립트가 실행될 때 끌어올려지는 현상을 말한다. var로 선언된 변수와 함수 선언문에만 호이스팅이 일어난다.
// compatibility(호환성) 
{
  age = 4;
  var age;
}
console.log(age);



// 3. Constants 값을 변경할 수 없음
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// * 정리: 자바스크립트에서는 변수를 선언할 때 mutable type의 "let", immutable type의 "const"가 있음



// 4. Variable types
// primitive (single item) : number, string, boolean, null, undefined, symbol
// object (box container 하나의 아이템을 여러개로 묶어 한 단위로 관리)
// function (first-class function) 

// number
const count = 17; //integer 정수
const size = 17.1; //decimal number 소수 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 크롬, 파이브폭스에서만 지원. 다른 브라우저에서는 지원이 안됨
const bigInt = 1234567890123456789012345678901234567890n; // 자바스크립트에서 over (-2**53) ~ (2**53) 숫자만 표현 가능 (**: 제곱기호)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting} `);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // ``백틱을 사용하면 띄어쓰기가 반영됨
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // +기호를 일일이 써야 함 

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, creat unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // .description을 넣어 스트링으로 변환시켜야 오류가 나오지 않음

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;



// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 숫자임에도 문자로 인식
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); 
console.log(text.charAt(0));  //h가 나오게 하려했으나 이미 앞줄에서 type이 숫자로 바뀌면서 에러가 남
