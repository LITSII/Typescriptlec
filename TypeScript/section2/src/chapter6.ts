//any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
//let anyVar = 10;
anyVar = "hello"; // 오류 발생, 자동추론은 숫자

// anyVar = true;
// anyVar = {};
// anyVar = () => {};
//
// anyVar.toUpperCase();
// anyVar.toFixed();
//
// let num: number = 10;
// num = anyVar;

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//언노운 타입은 모든 타입에 할당 할 수가 없다.
if(typeof unknownVar === "number") {
    num = unknownVar;
}