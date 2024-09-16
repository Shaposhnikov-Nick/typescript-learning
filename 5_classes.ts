class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: TS version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

// аналогично:

class Car2 {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// модификаторы доступа
// protected - доступен в самом классе и классах-наследниках
// private - доступен только в самом классе
// public - доступен везде (используется по умолчанию)

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("Go");
  }
}

// наследование
class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat1 = new Cat();
console.log(cat1.color);

// переопределение конструктора
class Person {
  name: string;
  constructor(userName: string) {
    this.name = userName;
  }
  print(): void {
    console.log(`Имя: ${this.name}`);
  }
}

class Employee extends Person {
  company: string;
  constructor(name: string, company: string) {
    super(name);
    this.company = company;
  }
  work(): void {
    console.log(`${this.name} работает в компании ${this.company}`);
  }
}
// абстрактные классы и методы
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Render component");
  }
  info(): string {
    return "Info";
  }
}
