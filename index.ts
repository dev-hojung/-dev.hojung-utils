import utils, { snakeToCamelCaseObjectKey } from './dist'

console.log(utils.snakeToCamelCaseObjectKey({ab_c: 'a'}))
console.log(snakeToCamelCaseObjectKey({
  ab_c: 'a'
}));
