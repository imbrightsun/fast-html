# Lesson 02.
2024.3.2.Sat.

- ### API (Application Programming Interfce)
 ![](./images/API%20그림.png "Optional title")
 출처:https://www.postman.com/what-is-an-api/
 참고사이트: https://developer.mozilla.org/en-US/docs/Web/API/Console_API


- ### 자바스크립트 공식 사이트
  https://developer.mozilla.org



- ### async
```html
<script async src="./main.js"></script>
```
* 스크립트를 다운로드됐을때 곧바로 실행
* 다운로드 하는동안 HTML이 중단되지 않음
* 먼저 다운로드 된 스크립트 순으로 실행

- ### defer (추천)
```html
<script defer src="./main.js"></script>
```
* HTML완전히 다 읽은 후에 실행됨
* 다운로드 하는동안 HTML이 중단되지 않음 
* 정의된 스크립트 순서대로 실행

참고: https://webroadcast.tistory.com/15

- ### Use strict! (추천)
* Vanilla js(바닐라 자바스크립트)에서 사용
* Typescript에서는 선언할 필요 없음
```java
//added ECMAScript 5 
'use strict';