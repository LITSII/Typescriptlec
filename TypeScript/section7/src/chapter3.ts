/* 제네릭 인터페이스*/

interface KeyPair<K, V>{
    key: K,
    value: V
}

let keyPair : KeyPair<string, Object> = {
    key: "key",
    value: 0
};


let keyPair2: KeyPair<boolean, Object> = {
    key : true,
    value : ["1"]
}
// 타입변수 = 타입 파라미터 = 제네릭 타입 파라미터


// 인덱스 시그니처와 혼용

interface NumberMap {
    [key: string]: number;
}

let numberMap: NumberMap = {
    key: -1234,
    key2: 123123,
}

interface Map<V> {
    [key: string]: V;
}

let stringMap : Map<string> = {
    key: "value",
};

let booleanMap : Map<boolean> = {
    key: true,
}


/** 제네릭 타입 별칭 */
type Map2<V> = {
    [key: string]: V;
}

let stringMap2 : Map2<string> = {
    key: "hello",
}


/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저관리 프로그램
 * ->유저 구분 : 학생 유저 / 개발자 유저 */

interface Student {
    type : "student";
    school : string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name:string;
    // profile: Student | Developer;
    profile: T;
}

const developerUser: User<Developer> = {
    name : "이인태",
    profile: {
        type: "developer",
        skill: "javascript",
    }
}

function goToSchool(user: User<Student>) {
    if(user.profile.type !== "student"){
        console.log("go to student");
    }


    const school = user.profile.school;
    console.log(`${school}로 옴`);
}

// goToSchool(developerUser);