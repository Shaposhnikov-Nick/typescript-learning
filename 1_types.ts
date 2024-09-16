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

// Type - создание своих типов
type Login = string;
const log: Login = "admin";

type ID = string | number;
const id1: ID = "one";
const id2: ID = 1;
