import assert from 'assert';
import {singleConvertCamelToSnake} from '../lib/camelToSnakeCase/index.ts';

describe('SingleConvertCamelToSnake', function () {  
    it("aBC to a_b_c test", () => { 
      const result = singleConvertCamelToSnake("ABC");
      assert.equal(result, 'a_b_b');
    })
});