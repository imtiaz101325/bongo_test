const assert = require('assert');
const anagram_simple = require("../anagram_simple");

describe("Simple anagram function", () => {
  it("should return `true` if the two inputs are an anagram", () => {
    assert.equal(anagram_simple("bleat", "table"), true);
  })
});