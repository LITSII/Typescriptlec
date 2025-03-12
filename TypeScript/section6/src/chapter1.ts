/**
 * 타입스크립트의 클래스
 * */

const employee = {
    name : "이인태",
    age : 30,
    position : "developer",
    work() {
        console.log("일함");
    }
};


// 암시적으로 any 타입이 발생한다.
// 추론
class Employee {
    //필드
    name: string;
    // 방법 1 선택적 프로퍼티
    //name?: string;
    // 방법 2 초기값 설정
    // 방법 3 constructor 설정

    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }


    // method 정의
    work() {
        console.log("work");
    }

}


const employeeB = new Employee("이인태", 30 , "노예");
console.log(employeeB)

// function func (a) {
//     a.position = "alpha"
// }


// 클래스는 타입으로도 사용 될 수 있다.

const employeeC : Employee = {
    name : "",
    age : 1,
    position : "개발자",
    work() {}
}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber : number;

    //생성자
    constructor(name:string, officeNumber: number, position: string,  age: number) {
        super(name,age, position);
        this.officeNumber = officeNumber;
    }

}