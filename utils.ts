// Use ReturnType
function getHelloMessage() {
  return 'Hello from typescript';
}

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

type R = ReturnType<typeof getHelloMessage>

// Use Parameters
function printversion(version: number) {
  return `Available new version: ${version}`;
}

type MyParamType<T> = T extends (...args: infer P) => any ? P : T;
type R = MyParamType<typeof printversion>[0]
  
// PartialByKeys
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
