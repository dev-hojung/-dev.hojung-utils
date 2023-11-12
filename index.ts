import utils from './dist'


const snakeToCamel = utils.snakeToCamelCase(["aa_cd", ["aa_cd"], {
  "aa_bb": "a",
  "cc_bb": ["dd_ee"]
}])

const camelToSnake = utils.camelToSnakeCase({
  abC: 'a',
  b: [{
    aA: 'a',
    aB: 'b',
  }]
})

console.log('snakeToCamel: ', snakeToCamel);
console.log('camelToSnake: ', camelToSnake);
