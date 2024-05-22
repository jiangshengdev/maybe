// 定义 Option 类型
type Option<T> = Some<T> | None;

// Some 类表示存在的值
class Some<T> {
  constructor(public value: T) {}
  isSome(): this is Some<T> {
    return true;
  }
  isNone(): this is None {
    return false;
  }
}

// None 类表示不存在的值
class None {
  isSome(): this is Some<never> {
    return false;
  }
  isNone(): this is None {
    return true;
  }
}

// 创建 Option 类型值的辅助函数
function some<T>(value: T): Option<T> {
  return new Some(value);
}

function none(): Option<never> {
  return new None();
}

// 使用示例
function exampleFunction(value: number): Option<string> {
  if (value > 0) {
    return some('Value is positive');
  } else {
    return none();
  }
}

const result = exampleFunction(1);
if (result.isSome()) {
  console.log(result.value); // 输出: Value is positive
} else {
  console.log('No value');
}
