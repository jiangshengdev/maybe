/**
 * 表示一个可能存在或不存在的值的类型。
 */
export type Maybe<T> = Some<T> | None;

/**
 * 表示存在的值。
 */
export class Some<T> {
  constructor(public value: T) {}

  /**
   * 检查是否为 Some。
   * @returns 如果是 Some，返回 true；否则返回 false。
   */
  isSome(): this is Some<T> {
    return true;
  }

  /**
   * 检查是否为 None。
   * @returns 如果是 None，返回 true；否则返回 false。
   */
  isNone(): this is None {
    return false;
  }
}

/**
 * 表示不存在的值。
 */
export class None {
  /**
   * 检查是否为 Some。
   * @returns 如果是 Some，返回 true；否则返回 false。
   */
  isSome(): this is Some<never> {
    return false;
  }

  /**
   * 检查是否为 None。
   * @returns 如果是 None，返回 true；否则返回 false。
   */
  isNone(): this is None {
    return true;
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
