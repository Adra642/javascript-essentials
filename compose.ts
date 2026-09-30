export function flip<X, Y, Z>(f: (x: X, y: Y) => Z): (y: Y, x: X) => Z {
  return function (y: Y, x: X) {
    return f(x, y);
  };
}

export function compose<X, Y, Z>(g: (y: Y) => Z, f: (x: X) => Y): (x: X) => Z {
  return function (x: X) {
    return g(f(x));
  };
}

export function pipe<X, Y, Z>(f: (x: X) => Y, g: (y: Y) => Z): (x: X) => Z {
  return function (x: X) {
    return g(f(x));
  };
}

export function pipe2<X, Y, Z>(f: (x: X) => Y, g: (y: Y) => Z): (x: X) => Z {
  return compose(g, f);
}

export const pipe3 = flip(compose);

type UnaryFunction = (value: any) => any;

type ValidPipeline<Functions extends readonly UnaryFunction[]> =
  Functions extends readonly [
    infer First extends UnaryFunction,
    infer Second extends UnaryFunction,
    ...infer Rest extends UnaryFunction[],
  ]
    ? ReturnType<First> extends Parameters<Second>[0]
      ? ValidPipeline<readonly [Second, ...Rest]>
      : never
    : unknown;

type LastFunction<Functions extends readonly UnaryFunction[]> =
  Functions extends readonly [
    ...UnaryFunction[],
    infer Last extends UnaryFunction,
  ]
    ? Last
    : never;

export function mpipe<
  Functions extends readonly [UnaryFunction, ...UnaryFunction[]],
>(
  ...fs: Functions & ValidPipeline<Functions>
): (value: Parameters<Functions[0]>[0]) => ReturnType<LastFunction<Functions>> {
  
  type X = Parameters<Functions[0]>[0];
  
  return function (x: X) {
    let result = x;
    for (const fn of fs) {
      result = fn(result);
    }
    return result;
  };
}

// implemetar mflip
// implementar mcompose con mflip
