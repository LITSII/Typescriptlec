/**
 * 인터페이스와 클래스
 * */

interface CharacterInterface {
    name: string;
    movespeed: number;
    move(): void;
}

class Character implements CharacterInterface {

    constructor(public name: string, public movespeed: number) {
        this.name = name;
        this.movespeed = movespeed;
    }

    move(): void {
    console.log(`${this.movespeed}`);
    }

}