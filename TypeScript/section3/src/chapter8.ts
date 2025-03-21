/* 서로소 유니온 타입
* 교집합이 없는 타입들로만 만든 유니온 타입을 말함.  */

type Admin = {
    tag : "ADMIN";
    name: string;
    kickout : number;

};

type Member = {
    tag : "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag : "GUEST";
    name: string;
    visitCount: number;

};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount} 명 강퇴
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest => {name}님 현재까지 { 퍄냣채ㅕㅜㅅ} 번 오셨습니다.

// swtich 용






function login(user:User) {
    if('kickCount' in user){
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다`);
    } else if("point" in user){
        console.log(`${user.name}님 현재까지 ${user.point}명 강퇴하였습니다`);
    } else {
        //console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴하였습니다`);
    }


}

/* 복습겸 한가지 더 사례 */

/* 비동기 작업의 결과를 처리하는 객체 */
//
// type AsyncTask = {
//     state : "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     }
// }

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

/* 서로소 유니온 타입으로 치환 */
type LoadingTask = {
    state : "LOADING";
}

type FailedTask = {
    state : "FAILED";
    error: {
        message: string;

    }
}

type SuccessTask = {
    state : "SUCCESS";
    response: {
        data: string;
    }
}

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task:AsyncTask){
    switch(task.state){
        case "LOADING": {
            console.log("로딩중");
            break;
        }
        case "FAILED": {
            console.log(`에러발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading = {
    state : "LOADING",
}

const failed = {
    state : "FAILED",
    error :{message : "ERROR"},
}

const success = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~",
    },
}