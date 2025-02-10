/* 타입 추론 */

let a = 10;

// 매개변수 쪽에는 필요
// function func(param) {
//
// }

let b  =  "안녕하세요";

let c = true;
let d = undefined;

let e = {
    id: 1,
    name : "이인태",
    profile: {
        nickname : "LITS"
    },
}

let { id, name, profile} = e;
let [one, two , three] = [1, "hello", true];

function func() {

    return sessionStorage;
}

function func2(message = "hello") {

    return message;
}

let f;
f= 10;
f.toFixed();

f = "heelo";

f.toLowerCase();
// f.toFixed();


const num = 10;
const str = "hello";

let arr = [1, "string", "string2"];
