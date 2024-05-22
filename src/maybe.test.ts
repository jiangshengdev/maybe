import { expect, test } from 'vitest';
import { Maybe, none, None, Some, some } from './maybe';

test('some creates a Some instance', () => {
  const value = 42;
  const result = some(value);
  expect(result).toBeInstanceOf(Some);
  expect(result.isSome()).toBe(true);
  expect(result.isNone()).toBe(false);
  if (result.isSome()) {
    expect(result.value).toBe(value);
  }
});

test('none creates a None instance', () => {
  const result = none();
  expect(result).toBeInstanceOf(None);
  expect(result.isSome()).toBe(false);
  expect(result.isNone()).toBe(true);
});

test('Some type checks correctly', () => {
  const result: Maybe<number> = some(100);
  expect(result.isSome()).toBe(true);
  if (result.isSome()) {
    expect(result.value).toBe(100);
  }
});

test('None type checks correctly', () => {
  const result: Maybe<string> = none();
  expect(result.isNone()).toBe(true);
  expect(result.isSome()).toBe(false);
});

test('Maybe can hold different types', () => {
  const stringResult = some('hello');
  const numberResult = some(123);
  const booleanResult = some(true);

  expect(stringResult.isSome()).toBe(true);
  if (stringResult.isSome()) {
    expect(stringResult.value).toBe('hello');
  }

  expect(numberResult.isSome()).toBe(true);
  if (numberResult.isSome()) {
    expect(numberResult.value).toBe(123);
  }

  expect(booleanResult.isSome()).toBe(true);
  if (booleanResult.isSome()) {
    expect(booleanResult.value).toBe(true);
  }
});

test('Maybe with complex objects', () => {
  const obj = { a: 1, b: 'test' };
  const result = some(obj);

  expect(result.isSome()).toBe(true);
  if (result.isSome()) {
    expect(result.value).toEqual(obj);
    expect(result.value.a).toBe(1);
    expect(result.value.b).toBe('test');
  }
});
