// Lesson 06. 2024. 03. 05. tue. 

// class person{  -> class
//   name;    -> properties (속성), field (속성)
//   age;     -> properties (속성), field (속성)
//   speak(); -> function (기능), method(행동)
// }
// class에 methods가 들어 있지 않은 경우 데이터 클래스라고 한다.

// Class 는 붕어빵을 만드는 틀과 같음. 정의만 함. 메모리에 올라가지 않음
// - template
// - declare once
// - no data in

// Object 붕어빵! 메모리에 올라감. class(붕어빵틀)에 넣은 거에 따라 팥붕어빵, 슈크림붕어빵, 피자붕어빵을 만듬 ㅋ
// - instance of a class
// - created many times
// - data in 


'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // field
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// 오브젝트 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();



// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0: value;
  }
}
const user1 = new User('steve', 'Job', -1);
console.log(user1.age);



// 3. Fields (public, private)
// Too soon!