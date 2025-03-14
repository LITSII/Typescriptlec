/* promise 객체 타입스크립트*/

import {rejects} from "node:assert";

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        reject("something went wrong");
    }, 3000);



});

promise.then((response) => {
    console.log(response * 10);
}). catch((err) => {

    if (typeof err == "string"){
    console.log(err);

    }
})


/* 프로미스를 바환하는 함수의 타입을 정의*/

interface Post {
    id: number;
    title: string;
    content: string;
}


// 협업의 관점에서 -> 더 가독성이 좋은 방법만 확인한다.
function fetchPosts():Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "poste1",
                content : "content 1",
            })
        }, 3000);
    })
}


const PostRequest = fetchPosts();

PostRequest.then((post: Post) => {
    post.id;
})