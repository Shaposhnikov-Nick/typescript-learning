// boolean
const isFetching: boolean = true;
const isFetching2: boolean = false;

// number
let num: number = 24;
num = 12;
const num2: number = 4.2;
const num3 = 3e10;

// string
const str: string = "Hello";

// array
const numberArray: number[] = [1, 2, 3, 4];
const numberArray2: Array<number> = [1, 2, 3, 4];
const words: Array<string> = ["hello", "world"];

// tuple - массив из разных типов данных
const contacts: [string, number] = ["Nick", 12345];

// any
let variable: any = 42;
variable = "String";

// function
function sayName(name: string): void {
  console.log(name);
}
sayName("nick");

// never
function throwError(message: string): never {
  throw new Error(message);
}
