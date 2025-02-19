/*
* 함수 타입 정의
* */


/* 함수를 설명하는 가장 좋은 방법
* 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
* ts : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기*/
function func(a:number,b:number):number{
    return a + b;
}

/**
 * 화살표 함수의 타입 정의
 * */

const add = (a:number,b:number): number => a + b;

/**
 * 함수의 매개변수*/

function introduce(name = "이인태", age :number, tall?:number) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`); // 덧셈 연산은 막혀있다.

    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10 }`);
    }
}

// 선택적 매개변수 작성시 파라미터 확인

introduce("이인태",30,181);
introduce("이인태", 30);

function getSum(...rest:number[]){
    let sum = 0;

    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);

