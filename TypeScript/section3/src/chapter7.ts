/*
* 타입 좁히기
* 조건문 등을 이용해 넓은타입에서 좁은타입으로
* 타일을 상황에 따라 좁히는 방법을 이야기*/

type Person = {
    name: string;
    age:number;
}

// value => number : toFixed
// value => string : to UpperCase
// value => Date : getTime
//
function func(value: number| string | Date | null | Person){
    // value;
    // value.toUpperCase();
    // value.toFixed();

    if(typeof value === "number"){
        console.log(value.toFixed());
    } else if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
        // }else if(value instanceof Person){
        //     // 인스턴스 연산자는 클래스인지 확인하는 과정이다. -> 타입의 확인이 아니다.
        //     // in 이란 연산자를 적용한ㄷㅏ.
        // }
    } else if (value && "age" in value){
        console.log(`${value.name}은 ${value.age} 살 입니다.`);
    }
}