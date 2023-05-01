
type PartialByKeys<T extends object, K extends keyof T> = {
  [P in K]?: T[P]
} & Pick<T, Exclude<keyof T, K>>

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: PartialByKeys<User, 'age' | 'isAdmin'> = {
  isAdmin: true,
  name: 'Jony',
}
