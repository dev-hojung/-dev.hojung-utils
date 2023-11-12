import assert from 'assert';
import {singleConvertSnakeToCamel} from '../lib/snakeToCamelCase/index.ts';

describe('SingleConvertSnakeToCamelCase', function () {
  describe('multi underscore test', () => {
    it("a___b___c to aBC test", () => { 
      const result = singleConvertSnakeToCamel("a__b_c");
      assert.equal(result, 'aBC');
    })
  })

  describe("single undersocre test", () => {
    it("a_b_c to aBC test", () => { 
      const result = singleConvertSnakeToCamel("a_b_c");
      assert.equal(result, 'aBC');
    })
  })
});