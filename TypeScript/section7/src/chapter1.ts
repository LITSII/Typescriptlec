/**
 * 첫번째 사례*/

function swap<T, U>(a: T, b: U) {
    return[b,a];
}

const [a,b] = swap("1",2);
// A에 들어오는 값은 String 값이기 때문에, B에는 number 가 할당 될 수 있도록,
// U선언,

/**
 * 두번 째 사례*/

function returnFirstVale<T>(data:[T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstVale([0,1,2]);

let str = returnFirstVale(["hello", "mynameis"]);

/**
 * 세번째 사례
 * */

function getLength<T extends { length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1,2,3]);

let var2 = getLength("12345");

let var3 = getLength({length:10});

// let var4 = getLength(10);

