import { describe, expect, test } from 'vitest';
import { validateProjectName } from './validateProjectName.js';

describe('The validateProjectName function', () => {
  describe('happy path', () => {
    test('returns with only lowercase', () => {
      const testProjectName = 'hellothere';
      expect(validateProjectName(testProjectName)).toBe(testProjectName);
    });

    test('returns with only uppercase', () => {
      const testProjectName = 'HELLOTHERE';
      expect(validateProjectName(testProjectName)).toBe(testProjectName);
    });

    test('returns with only numbers', () => {
      const testProjectName = '42';
      expect(validateProjectName(testProjectName)).toBe(testProjectName);
    });

    test('returns with lowercase and uppercase', () => {
      const testProjectName = 'HelloThere';
      expect(validateProjectName(testProjectName)).toBe(testProjectName);
    });

    test('returns with lowercase, uppercase, and numbers', () => {
      const testProjectName = 'HelloThere42';
      expect(validateProjectName(testProjectName)).toBe(testProjectName);
    });
  });

  describe('the unhappy path', () => {
    test('fails with a space', () => {
      expect(() => validateProjectName('hello there')).toThrowError();
    });
    test('fails with a dash', () => {
      expect(() => validateProjectName('hello-there')).toThrowError();
    });
    test('fails with an underscore', () => {
      expect(() => validateProjectName('hello_there')).toThrowError();
    });
    test('fails with a slash', () => {
      expect(() => validateProjectName('hello/there')).toThrowError();
    });
    test('fails with a $', () => {
      expect(() => validateProjectName('hello$there')).toThrowError();
    });
  });
});
