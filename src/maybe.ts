/**
 * 表示一个可能存在或不存在的值的类型。
 */
export type Maybe<T> = Some<T> | None;

/**
 * 抽象基类，表示一个可能存在或不存在的值。
 */
abstract class MaybeBase<T> {
  /**
   * 检查是否为 Some。
   * @returns 如果是 Some，返回 true；否则返回 false。
   */
  abstract isSome(): this is Some<T>;

  /**
   * 检查是否为 None。
   * @returns 如果是 None，返回 true；否则返回 false。
   */
  abstract isNone(): this is None;

  /**
   * 映射当前 Maybe 的值。
   * @param fn 映射函数。
   * @returns 一个新的 Maybe，包含映射后的值。
   */
  abstract map<U>(fn: (value: T) => U): Maybe<U>;

  /**
   * 解包当前 Maybe 的值，如果为 None 则返回默认值。
   * @param defaultValue 默认值。
   * @returns 当前 Maybe 的值或默认值。
   */
  abstract unwrap_or<U>(defaultValue: U): T | U;
}

/**
 * 表示存在的值。
 */
export class Some<T> extends MaybeBase<T> {
  constructor(public value: T) {
    super();
  }

  isSome(): this is Some<T> {
    return true;
  }

  isNone(): this is None {
    return false;
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return new Some(fn(this.value));
  }

  unwrap_or<U>(_defaultValue: U): T {
    return this.value;
  }
}

/**
 * 表示不存在的值。
 */
export class None extends MaybeBase<never> {
  isSome(): this is Some<never> {
    return false;
  }

  isNone(): this is None {
    return true;
  }

  map<U>(_fn: (value: never) => U): Maybe<U> {
    return new None();
  }

  unwrap_or<U>(defaultValue: U): U {
    return defaultValue;
  }
}

/**
 * 创建一个存在的值。
 * @param value 值。
 * @returns 一个包含该值的 Some 对象。
 */
export function some<T>(value: T): Maybe<T> {
  return new Some(value);
}

/**
 * 创建一个不存在的值。
 * @returns 一个 None 对象。
 */
export function none(): Maybe<never> {
  return new None();
}
