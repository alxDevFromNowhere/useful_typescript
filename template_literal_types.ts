type EventName<T extends string> = `${T}Changed`;
type Concat<S1 extends string, S2 extends string> = `${S1}-${S2}`;
type ToString<T extends string | number | boolean | bigint> = `${T}`;

type T0 = EventName<"foo">; // 'fooChanged'
type T1 = Concat<"Hello", "World">; // 'Hello-World'
type T2 = ToString<"bytefer" | 666 | true | -1234n>;
// "bytefer" | "true" | "666" | "-1234"
  
type T3 = EventName<"foo" | "bar" | "baz">;
// "fooChanged" | "barChanged" | "bazChanged"

type T4 = Concat<"top" | "bottom", "left" | "right">;
// "top-left" | "top-right" | "bottom-left" | "bottom-right"
  
type InferSide<T> = T extends `${infer R}-${Alignment}` ? R : T;

type T7 = InferSide<"left-start">;  // "left"
type T8 = InferSide<"right-end">;   // "right"

type WithGeteers<T extends object> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
} & T

type Person = {
  name: string;
  age: number;
  childer: Person[];
}

const p: WithGeteers<Person> = {
  name: '',
  age: 22,
  childer: [],
  getAge() {
    return this.age;
  },
  getChilder() {
    return this.childer;
  },
  getName() {
    return this.name;
  }
}
