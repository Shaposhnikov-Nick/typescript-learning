// создание типа из интерфейса
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "age";
key = "name";
// key = 'job' // error

// создание типа из другого типа
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

// создание типа из другого типа, исключая определенные поля
type UserKeyNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email'

// создание типа из другого типа, включая определенные поля
type UserKeyNoMeta2 = Pick<User, "name" | "email">; // 'name' | 'email'
