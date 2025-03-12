/* 선언 합침 */

interface Person {
    name: string;
}

interface Person {
    // name: number;     반드시 동일한 타입으로만 선언되어야 한다. -> 라이브러리의 타입이 부실한 경우 보통 사용 한다 (모듈 보강) -> subtype으로 빠지는 것도 허용되지 않는다.
    age: number;
}
// 동일한 이름으로 중복 선언 가능 => declaration merging
// conflict 는 허용되지 않는다.

interface Developer  extends Person {
    name : "hello";
}


const person  : Person = {
    name: "",
    age: 27
}

/* 모듈 보강 */
interface Lib{
    a: number;
    b: number;
}

// 추가된 모듈
interface Lib{
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}

