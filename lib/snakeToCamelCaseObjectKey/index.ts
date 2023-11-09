import { ReturnCamel } from './type';

const snakeToCamelCaseObjectKey = <T>(object: T): ReturnCamel<T> => {
  const newObject: Record<string, any> = {};
  for (const key in object) {
    const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    newObject[camelCaseKey] = object[key];
  }
  return newObject as any;
};

export default snakeToCamelCaseObjectKey;