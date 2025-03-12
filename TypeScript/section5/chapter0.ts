/**
* 인터페이스
* */

interface IPerson {
    name: string;
    age?: number;
    sayHi(): void;
    sayHi(a:number, b:number):void;
}

const person: IPerson = {
    name: "이인태",
    sayHi : function () {
        console.log("hi");
    },
};



person.name = "이인태";

person.sayHi();
person.sayHi(1,2);

/* 유니온과 인터섹션 불가*/