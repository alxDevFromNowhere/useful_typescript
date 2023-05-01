
type FunctionPropertyNames<T> = {
  [key in keyof T]: T[key] extends (...args: any[]) => any | void ? key : never
}[keyof T]

type FunctionPropertyMethods<T> = Pick<T, FunctionPropertyNames<T>>;

interface User {
  name: string;
  age: number;
  sayhello(): void,
  getAge: () => number;
}

type UserMethods = FunctionPropertyMethods<User>
