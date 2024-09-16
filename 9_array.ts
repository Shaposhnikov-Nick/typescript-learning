// array
const numberArray: number[] = [1, 2, 3, 4];
const numberArray2: Array<number> = [1, 2, 3, 4];
const words: Array<string> = ["hello", "world"];
const some: Array<any> = [1, 2, "one", true];

// readonly array
const array2: ReadonlyArray<number> = [1, 2, 3];
const array3: readonly string[] = ["q", "w"];

// кортеж - массив из разных типов данных

// кортеж фиксированной длинны
const contacts: [string, number] = ["Nick", 12345];
let bob: [string, number, boolean?] = ["Bob", 41, true];
let tom: [string, number, boolean?] = ["Tom", 36];

// кортеж произвольной длины
let math: [string, number] = ["math", 1, 2, 3, 4];
