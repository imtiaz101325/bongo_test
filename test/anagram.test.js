const assert = require("assert");
const anagram_simple = require("../anagram_simple");
const anagram_complex = require("../anagram_complex");

describe("Simple anagram function", () => {
  it("should return `true` if the two inputs are an anagram", () => {
    assert.equal(anagram_simple("bleat", "table"), true);
  });

  it("should return `false` if the two inputs are not an anagram", () => {
    assert.equal(anagram_simple("eat", "tar"), false);
  });
});

describe("Complex anagram function", () => {
  it("should return `true` if the two inputs are an anagram", () => {
    assert.equal(anagram_complex("bleat", "table"), true);
  });

  it("should return `false` if the two inputs are not an anagram", () => {
    assert.equal(anagram_complex("eat", "tar"), false);
  });
});
