/* 접근제어자 ( access modifier)
* public private protected */

class Employee {
    //필드
    private name: string;
    // 방법 1 선택적 프로퍼티
    //name?: string;
    // 방법 2 초기값 설정
    // 방법 3 constructor 설정

    protected  age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }


    // method 정의
    work() {
        // console.log("work");
        console.log(`${this.name}가 일해용!`);
    }


}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber : number;

    //생성자
    // 생성자 앞에 접근제어자를 달 수 있다.
    // 생성자에 접근제어자를 달게 되면 , 필드선언이  필요 없다.
    constructor(name:string, officeNumber: number, position: string,  age: number) {
        super(name,age, position);
        this.officeNumber = officeNumber;
    }

    func(){
        console.log(`${this.age}`);
    }
}

const employee = new Employee("이인태", 30, "dev") ;
//employee.name = "홍길동"; // private 일 경우 클래스 내에서만 접근가능.
// protected 의 경우 상속받으면 접근가능;
employee.position= 'designor';
console.log(employee);
