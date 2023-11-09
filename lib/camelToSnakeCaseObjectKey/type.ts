type CamelToSnake<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnake<U>}`
  : S;

export type ReturnSnake<T> = { [K in keyof T as CamelToSnake<string & K>]: ReturnSnake<T[K]> };
