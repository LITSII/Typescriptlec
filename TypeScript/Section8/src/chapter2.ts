// key of 연산자

// 객체 타입에 적용하는 연산자
//
// interface Person {
//     name: string;
//     age: number;
// }


// 타입 스크립트의 추론기능 활용
type Person = typeof person;


// function getPropertyKey(person:Person, key:keyof  Person){
function getPropertyKey(person:Person, key:keyof typeof person){
    // person 객체의 유니온 타입을 매번 새로 선언해줘야하거나 수정해줘야 하므로 유니온타입은 비권장
    // key of 연산자 이용  -- 타입에만 사용 가능
    return person[key];
}

// const person: Person = {
const person = {
    name :"이인태",
    age : 20,
}

getPropertyKey(person, "name");   /// 이인태

// type of 연산자
