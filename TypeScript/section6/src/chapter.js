/**
 * 클래스
 * */

let studentA = {
  name: "이인태",
  grade: "A+",
  age : "30",
  study(){
      console.log("열심히 공부 함")
  },
    introduce(){
      console.log("안녕하세요!");
    }
};
//
// let studentB = {
//     name: "홍길동",
//     grade: "B-",
//     age : "30",
//     study(){
//         console.log("열심히 공부 함")
//     },
//     introduce(){
//         console.log("안녕하세요!");
//     }
// };


// 실제 학교에서 사용시 매우 불편한 작업

// class -> 객체를 만들어내는 틀이다.

// 클래스 문법 사용
// 파스칼 표기법 사용
class Student {
    // field 설정
    // 클래스가 만들어내는 객체 프로퍼티 지정
    name;
    grade;
    age;
    
    // 생성자
    // 호출시 실제로 객체를 생성하는 메소드
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 그대로 반환으로 우선 실행

    // 메소드
    study(){
        console.log("열심히 공부함");
    }

    introduce(){
        console.log(` 안녕하세요 ${this.name} 입니다.`);
    }


}

// 방식은 프로퍼티 전달과 비슷하다 => java의 service 호출시 전달하는 프로퍼티와 비슷.
// 클래스를 이용해서 만든 객체 =-> 인스턴스
let StudentB = new Student("이인태","A", 30);

class StudentDeveloper {
    constructor(name, grade, age, favoriteSkill){
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.favoriteSkill = favoriteSkill;
    }

    study(){
        console.log("열심히 공부함");
    }

    introduce(){
        console.log("안녕하세요");
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }

}

const student = new StudentDeveloper("이인태", "B+", 30, "java");
console.log(student);
// StudentDeveloper.programming();