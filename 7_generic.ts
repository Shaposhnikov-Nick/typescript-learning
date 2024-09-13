const arrayNumbers: Array<number> = [1, 2, 3];

// параметризованная функция
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
