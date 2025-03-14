/*
* mapped type
* 인터페이스에서 사용 불가
*
* 실무에서 자주 사용.
* */

interface User {
    id: number;
    name: string;
    age: number;
}


type BooleanUser = {
    [key in 'id' | 'name' | 'age'] : boolean;
}

// mapped type
type partialUser = {
    // [key in "id"| "name" | "age"]? : User[key];
    [key in keyof User]? : User[key];
}


// readonly User
type ReadonlyUser = {
    readonly  [key in keyof User]? : User[key];
}

// 한명의 유저 정보를 불러오는 기능

function fetchUser():ReadonlyUser{

    return {
        id: 1,
        name: "이인태",
        age: 20,
    }
}

// 한명의 유저 정보를 수정하는 기능

function updateUser(user:partialUser) {
    // 수정하는 기능
}


updateUser({
    // id : 1,
    // name: "이인태",
    age: 33,
})