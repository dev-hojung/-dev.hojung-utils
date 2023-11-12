import utils from './dist'


const snakeToCamel = utils.snakeToCamelCase({
  ab_c_c____c_c_c_c: 'a',
  b: [{
    a_a: 'a',
    a_b: 'b',
  }]
})

const camelToSnake = utils.camelToSnakeCase({
  abC: 'a',
  b: [{
    aA: 'a',
    aB: 'b',
  }]
})

console.log('snakeToCamel: ', snakeToCamel);
console.log('camelToSnake: ', camelToSnake);
