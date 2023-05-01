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
