import { ReturnSnake } from "./type";

export const camelToSnakeCaseObjectKey = <T>(object: T): ReturnSnake<T> => {
  const newObject: Record<string, any> = {};
  for (const key in object) {
    const snakeCaseKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    newObject[snakeCaseKey] = object[key];
  }
  return newObject as any;
};