/* 제네릭 클래스*/

class list<T>{
    constructor(private list: T[]) {

    }


    push(data:T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print(){
        console.log(`${this.list}`);
    }

}


const numberList = new list([1,2,3]);

numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new list(["string1", "string2"]);

// stringList.push(numberList[0].toString() : string);