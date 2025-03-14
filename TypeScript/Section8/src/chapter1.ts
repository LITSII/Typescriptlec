/*  인덱스드 액세스 타입
*
* 객체 배열 튜플에 사용 가능*/


// 객체
type PostList  = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    }
}[];

// 각 객체의 변화를 감지하기 위해서는 인덱스드 액세스 타입을 사용
// 객체 타입으로 부터 특정 부분을 구조분해하여 사용 하는것
// 구조분해 할당의 타입스크립트형 사용방법이라고 생각하면 편하다.
// 예시 : author: Post["author"]  -- 타입만 명시 가능하다.
// 예시 : author: Post["author"], ["추가된 인덱스드 프로퍼티"]  -- 타입만 명시 가능하다.

const key = "author";

function printAuthorInfo(author: PostList[number]["author"]){
    console.log(`${author.id} - ${author.name}`);
}

const snum = 0; // 리터럴의 할당은 역시 불가능하다.

const post : PostList[number] = {
    title : "하이",
    content: "본문",
    author : {
        id: 1,
        name : "이인태",
        age: 31
    }
}


// 튜플과 함께 사용

type Tup = [number,string,boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];   // 존재하지 않는 인덱스를 서술시 오류를 배출한다.

type TupNum = Tup[number];
