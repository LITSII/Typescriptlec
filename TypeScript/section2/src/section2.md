# chapter3

***
객체리터럴 방식을 사용한다.
일반 object로는 타입 정의가 불가능하므로

``` typescript
    let dog : {name : string; color : string;} = {
    name: "다롱이",
    color: "gold"
}
```

* 객체의 구조를 기준으로 타입을 정의
  * 구조적 타입 시스템 이라고 칭함
  * (property type system)
  * 명목적 타입 시스템과 반대되는 개념


// 선택적 타입 정의
user = {
id: 1,
name?: "홍길동",
};


***
# chapter4
타입 별칭

같은 스코프 내에서 같은 별칭을 사용하면 안된다.

``` typescript
//object

type User = {
    id: number; name: string; nickname: string; birth: string; bio: string; location: string;
    //extra : 
}


let user : User = {
    id: 1,
    name : "이인태",
    nickname : "intae",
    birth : "1995.05.12",
    bio: "하이요",
    location : "서울"
};

```


***
* 인덱스 시그니처
```typescript

type CountryCodes = {
   [key: string] : string
};

// 타입 별칭의 동적 움직임을 위한 정의

let countryCodes:CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk',
}
```

* 주의 : 규칙위반에 대하여만 타입검사가 되므로, 아예 빈값은 타입검사가 되지 않는다.
  * 인덱스 시그니처의 경우 강한 타입검사시 호환되어야 한다.

---

# Enum(열거형 타입)

* 자동 할당 역시 가능하다.
* 직접 할당시 자동으로 주변 숫자로 채워준다.
* ex) 숫자형 enum
```typescript
ADMIN  = 0,
    User =1    ,
    Guest= 2

ADMIN  = 10,
        User     ,
        Guest
```
``` typescript
enum Role {
    ADMIN  = 0,
    User =1    ,
    Guest= 2
}


const user1 = {
    name : "이인태",
    role : Role.ADMIN    //0 관리자
}
const user2 = {
    name : "홍길동",
    role : Role.User        // 1 일반 유저
}

const user3 = {
    name : "아무개",
    role : Role.Guest // 2 게스트
}
```