// http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
// http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
// http://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html

// 使用 class 来定义对象
declare class Greeter { }
declare class MyGreeter extends Greeter { }

// 使用 interface 定义属性的类型
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings): void;

// 使用 type alias
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet(g: GreetingLike): void;

// 使用 namespace
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

