type CamelCase<S extends string> = S extends `${infer First}_${infer Rest}`
  ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
  : S;

export type SnakeToCamelType<T> = T extends Array<infer U>
  ? Array<SnakeToCamelType<U>>
  : T extends object
  ? { [K in keyof T as CamelCase<string & K>]: SnakeToCamelType<T[K]> }
  : T;
