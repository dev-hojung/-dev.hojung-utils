import { CamelToSnakeType } from './type';

export const singleConvertCamelToSnake = (str: string) => {
  return str.replace(/[A-Z]/g, (letter, index) => {
    if (index === 0 && letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    }

    return `_${letter.toLowerCase()}`;
  });
};

const camelToSnakeCase = <T,>(arg: T): CamelToSnakeType<T> => {
  if (Array.isArray(arg)) {
    return arg.map((item) => camelToSnakeCase(item)) as any;
  }

  if (arg !== null && typeof arg === 'object') {
    return Object.entries(arg).reduce((acc, [key, value]) => {
      const snakeKey = singleConvertCamelToSnake(key) as keyof T;
      return { ...acc, [snakeKey]: camelToSnakeCase(value) } as any;
    }, {}) as any;
  }

  if (typeof arg === 'string') {
    return singleConvertCamelToSnake(arg) as any;
  }

  return arg as any;
};

export default camelToSnakeCase;
