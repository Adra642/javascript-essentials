export function some<X>(xs: X[], f: (x: X) => boolean): boolean {
  for (let x of xs) {
    if (f(x)) {
      return true;
    }
  }
  return false;
}

export function every<X>(xs: X[], f: (x: X) => boolean): boolean {
  for (let x of xs) {
    if (!f(x)) return false;
  }
  return true;
}

export function find<X>(xs: X[], f: (x: X) => boolean): X | null {
  for (let x of xs) {
    if (f(x)) return x;
  }
  return null;
}
