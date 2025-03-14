/* 템플릿 리터럴 타입 */
// 좋지 않은 예시
type Color = "red" | "green" | "blue";

type Animal = "dog" | "cat" | "zibra";

// type ColoredAnimal = "red-dog" | "red-cat" | "red-zibra";

type ColoredAnimal = `${Color}-${Animal}`;