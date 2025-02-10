/**
 * Unknown 타입
 * */


function unknownExam() {
    /* 모든 타입의 슈퍼 타입 */
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar : unknown;

    // 다운 캐스팅은 불가하다.
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


/* never 타입 */
// 모든 집합의 부분집합 -> 공집합
function neverExam() {
    function neverFunc(): never {
        // 반환값이 아무것도 없다
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 역시 다운캐스팅은 불가능하다. -> 어떤 값도 저장할수 없게 된다.
    // let never1: never = 1;
    // let never2: never = "string";
    // let never3: never = true;
}

/* void 타입 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        // 보이드 타입은 undefined값의 슈퍼타입이다.

        return undefined;
    }

    let voidVar : void = undefined;

}

/* any 타입*/
/* 비사용 권장 */
function anyExam(){
    // type 계층도에 대한 무시( never의 반대점으로서 never 부분은 불가능)
    let unknownVar : unknown;
    let anyVar: any;
    let undefinedVar : undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // never 타입의 다운 캐스팅은 불가능하다.
    //neverVar = anyVar;

}