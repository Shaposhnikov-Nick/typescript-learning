// создание и применение интерфейсов
interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 20,
    height: 30,
  },
};
console.log(rect2);
console.log(rect2.color);
rect2.color = "black";

// приведение типов
const rect3 = {} as Rect;

// наследование интерфейсов
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect4: RectWithArea = {
  id: "123",
  size: {
    width: 12,
    height: 15,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

console.log(rect4.getArea());

// имплементация интерфейсов в классе
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// если в интерфейсе нужно много полей, чтобы их не перечислять
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
