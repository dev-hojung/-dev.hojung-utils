type SnakeToCamel<S extends string> = S extends `${infer First}_${infer Rest}`
  ? `${Lowercase<First>}${Capitalize<SnakeToCamel<Rest>>}`
  : S;
  
export type ReturnCamel<T> = { [K in keyof T as SnakeToCamel<string & K>]: ReturnCamel<T[K]> };
