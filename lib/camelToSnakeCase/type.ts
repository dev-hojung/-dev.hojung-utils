type CamelCase<S extends string> = S extends `${infer First}_${infer Rest}`
  ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
  : S;

export type CamelToSnakeType<T> = T extends Array<infer U>
  ? Array<CamelToSnakeType<U>>
  : T extends object
  ? { [K in keyof T as CamelCase<string & K>]: CamelToSnakeType<T[K]> }
  : T;
