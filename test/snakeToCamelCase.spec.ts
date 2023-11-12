import assert from 'assert';
import snakeToCamelCase, {singleConvertSnakeToCamel} from '../lib/snakeToCamelCase/index.ts';


// singleConvertSnakeToCamelCase 함수 테스트
describe('SingleConvertSnakeToCamelCase',  () => {

  // underscore 중복 패턴 테스트
  describe('multi underscore test', () => {
    it("a___b___c to aBC test", () => { 
      const result = singleConvertSnakeToCamel("a__b_c");
      assert.equal(result, 'aBC');
    })
  })
  // underscore 단일 패턴 테스트
  describe("single undersocre test", () => {
    it("a_b_c to aBC test", () => { 
      const result = singleConvertSnakeToCamel("a_b_c");
      assert.equal(result, 'aBC');
    })
  })
});

// snakeToCamelCase 함수 테스트
describe('SnakeToCamelCase', () => {
  const recursiveArray = ["aa_cd", ["aa_cd"], {
    "aa_bb": "a",
    "cc_bb": ["dd_ee"]
  }]

  // 인수가 Array 일때
  describe("Array arg", () => {

    // Array 인수가 단일 일때
    it ("sginle Array arg", () => {
      const result = snakeToCamelCase(["aa_cd"]);
      assert.deepEqual(result, ["aaCd"])
    })

    // Array 인수 트리가 깊을때
    it ("Array recursive", () => {
      const result = snakeToCamelCase(recursiveArray);  
      assert.deepEqual(result, ["aaCd", ["aaCd"], {"aaBb": "a", "ccBb": ["ddEe"]}]);
    })
  })
})
