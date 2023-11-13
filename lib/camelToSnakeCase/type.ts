type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${SnakeCase<U>}`
  : S;

export type CamelToSnakeType<T> = T extends Array<infer U>
  ? Array<CamelToSnakeType<U>>
  : T extends object
  ? { [K in keyof T as SnakeCase<string & K>]: CamelToSnakeType<T[K]> }
  : T;
