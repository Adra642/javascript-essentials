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
