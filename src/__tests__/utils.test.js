// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('should return true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('should return false for "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test('should return true for "Aibohphobia"', () => {
    expect(isPalindrome("Aibohphobia")).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isPalindrome("")).toBe(true);
  });

  test('should throw an error for non-alphabetic characters', () => {
    expect(() => isPalindrome("A!b@#")).toThrow('Input should only contain alphabetic characters.');
  });

  test('should throw an error for non-string inputs', () => {
    expect(() => isPalindrome(123)).toThrow('Input should be a string.');
  });
});
