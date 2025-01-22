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

// 인덱스 시그니처
type CountryCodes = {
   [key: string] : string
};

// 타입 별칭의 동적 움직임을 위한 정의

let countryCodes:CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk',
}

type CountryNumberCodes = {
    [key: string]: number,
    // 강한 타입 검사
    //Korea: string;
    Korea : number

}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom : 826,
}