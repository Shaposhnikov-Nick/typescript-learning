const arrayNumbers: Array<number> = [1, 2, 3];

// параметризованная функция
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

// параметризованный класс
class GenericUser<T> {
  private _id: T;
  constructor(id: T) {
    this._id = id;
  }
  getId(): T {
    return this._id;
  }
}

let tomm = new GenericUser<number>(3);
console.log(tomm.getId()); // возвращает number

let alice = new GenericUser<string>("vsf");
console.log(alice.getId()); // возвращает string

//параметризованный интерфейс
interface IUser<T> {
  getId(): T;
}

class UserImpl<T> implements IUser<T> {
  private _id: T;
  constructor(id: T) {
    this._id = id;
  }
  getId(): T {
    return this._id;
  }
}
