/* 타입 단언 */


type Person = {
    name: string;
    age: number;
}

let person : Person = {} as Person;

// as 로 타입스크립트 컴파일러에게 인식시킨다. type assertion (타입 단언)

person.name = "John";
person.age = 25;

type Dog = {
    name: string;
    color : string;
}

let dog : Dog = {
    name : "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

// 초과 프로퍼티의 경우, 단언을 선언하면 오류가 사라진다.


/* 타입단언의 규칙
* 값 as 단언 <- 단언식
* A as B
* A 가 B의 슈퍼타입이거나
* A 가 B의 서브타입이어야 한다. */


let num1 = 10 as never;
let num2 = 10 as unknown;
//let num3 = 10 as String;
let num4 = 10 as unknown as String; // 다중 단언을 하게 되면, 오류가 안나게는 할수 있으나 정말 좋은방법이 아니다.

/* const 단언
* */
let num5 = 10 as const;

let cat = {
    name : "야옹이",
    color : "yellow",
} as const;

// finally 화 이기 때문에, 내부 프로퍼티의 값의 변경은 불가능하다.


//cat.name = "something"

/* Non Null 단언  */
type Post = {
    title : string;
    author? : string;    //익명일수도 있다.
}

let post : Post = {
    title : "게시글1",
    author : "LITS"
}

//const len; number = post.author?.length;
const len: number = post.author!.length; // null이거나 undefined가 아니라고 믿게한다.


/* 타입 단언은 타입스크립트 컴파일러의 동작을 임시적으로 중지시킨다고 생각하면 편하다. */