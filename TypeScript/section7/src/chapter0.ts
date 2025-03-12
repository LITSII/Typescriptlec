/**
 * 제네릭
 * */

function func<T>(value: T) :T{

    return value;
}

 let num = func(10);
 // num.toUpperCase();
 //    num.toFixed(1);


if(typeof num === "number"){
    num.toFixed();
}

// 제네릭 함수로 변경 필요

let bool = func(true);

let str = func("string");

 let arr = func([1,2,3] as [number, number, number]);


 // 튜플타입에 대한 선언 => 제네릭 함수 호출 시 직접 대입.
let arr2 = func<[number,number,number]>([1,2,3]);