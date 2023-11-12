import { SnakeToCamelType } from './type';

export const singleConvertSnakeToCamel = (str: string) => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

const snakeToCamelCase = <T>(arg: T): SnakeToCamelType<T> => {
  if (Array.isArray(arg)) {
    return arg.map((item) => snakeToCamelCase(item)) as any;
  } 
  
  if(arg !== null && typeof arg === 'object') {
    return Object.entries(arg).reduce((acc, [key, value]) => {
      const camelKey = singleConvertSnakeToCamel(key) as keyof T;
      return {...acc, [camelKey]: snakeToCamelCase(value) } as any;
    }, {}) as any;
  }

  if (typeof arg === 'string') {
    return singleConvertSnakeToCamel(arg) as any
  }

  return arg as any;
};

export default snakeToCamelCase;