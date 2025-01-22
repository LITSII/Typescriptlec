//enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN  = 0,
    User =1    ,
    Guest= 2
}

enum Language {
    korean = "ko",
    english = "en",
}


const user1 = {
    name : "이인태",
    role : Role.ADMIN,
    language : Language.korean//0 관리자
}
const user2 = {
    name : "홍길동",
    role : Role.User,
    language: Language.english// 1 일반 유저
}

const user3 = {
    name : "아무개",
    role : Role.Guest,
    language : Language.english// 2 게스트
}


console.log(user1, user2, user3);