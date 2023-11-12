import snakeToCamelCase, {singleConvertSnakeToCamel} from './snakeToCamelCase';
import camelToSnakeCase, {singleConvertCamelToSnake} from './camelToSnakeCase';

export { default as snakeToCamelCase } from './snakeToCamelCase';
export { default as singleConvertSnakeToCamel } from './snakeToCamelCase';
export { default as camelToSnakeCase } from './camelToSnakeCase';
export { default as singleConvertCamelToSnake } from './camelToSnakeCase';

export type { SnakeToCamelType } from './snakeToCamelCase/type';
export type {CamelToSnakeType} from 'camelToSnakeCase/type';

export default {
  singleConvertSnakeToCamel,
  snakeToCamelCase,
  singleConvertCamelToSnake,
  camelToSnakeCase,
}