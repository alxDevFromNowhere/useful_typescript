type User = {
  id: number;
  name: string;
}

type PropertyType<T> =  T extends { id: infer U, name: infer R } ? [U, R] : T;
type U3 = PropertyType<User>; // [number, string]

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

type T0 = Unpacked<string>;                       // string
type T1 = Unpacked<string[]>;                     // string
type T2 = Unpacked<() => string>;                 // string
type T3 = Unpacked<Promise<string>>;              // string
type T4 = Unpacked<Promise<string>[]>;            // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>;  // string
  
type FirstIfString<T> = T extends [infer S, ...unknown[]] ? S extends string ? S : never : never;
// ts >= 4.7
type FirstIfString<T> = T extends [infer S extends string, ...unknown[]] ? S : never;

export type TUnwrapPromise<T> =
  T extends Promise<infer U> ? U :
    T extends (...args: any) => Promise<infer U> ? U :
      T extends (...args: any) => infer U ? U :
        T;

declare function foo(a: number): void;
declare function foo(a: string): string;
declare function foo(a: boolean[]): Array<boolean>

type R = ReturnType<typeof foo>; // boolean[] last call signature

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
