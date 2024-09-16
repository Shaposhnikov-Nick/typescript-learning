function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

// перегрузка функций
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log("Empty: ", position());
console.log("One arg: ", position(42));
console.log("Two args: ", position(5, 7));

// стрелочные функции
const logger = (message: string) => {
  console.log(message);
};

logger("Error");

const sum = (x: number = 0, y: number = 1) => x + y;
console.log(sum(5));
console.log(sum(2, 7));

// union
const printId = (id: number | string) => console.log(`Id: ${id}`);
printId("123");
printId(123);

// неопределенный набор аргументов
function addNum(firstNum: number, ...numberArray: number[]): number {
  let result = firstNum;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  return result;
}
