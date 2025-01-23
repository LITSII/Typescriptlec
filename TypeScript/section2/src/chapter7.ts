//void 타입

function func1(): string {
    return "hello";
}

function func2():undefined{
    console.log("Hello");
    // 반환 값이 없을때
// undefined나 null 타입 선언시
    //반환값의 타입으로 undefined나 null 이 무조건 들어가야한다.


    return;
}

let a : void;
 //a= 1;
 //a = "hello";
 //a = {};
 a = undefined;
 //a = null; // stricted option = false 일 시 null에 대한 타입체크 미실행



// never

// 불가능한 타입 -> 반환값 이 있는 것 자체가 문제일때.
function func3(): never{
    while (true){}
}

function func4(): never {
    throw  new Error("Hello");
}

// let a: never ;
// a= 1;
// a = {};
// a= "";
// a = undefined;
// a=null;
// a= anyVar;
//never은 모든 형식을 담을 수 없다.