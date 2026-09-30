import { expect, test } from "vitest";
import { filter } from "./filter";
import { isEven, isPalindrome } from "./functions";
import { reduce } from "./reduce";

test("filters even numbers", function () {
  expect(filter([1, 2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
});

test("filters palindromes", function () {
  expect(filter(["level", "hello", "abba", "world"], isPalindrome)).toEqual([
    "level",
    "abba",
  ]);

  expect(filter([], isPalindrome)).toEqual([]);
});


test("implementar filter con reduce", function() {
  function filter<X>(xs: X[], f: (x: X) => boolean): X[] {
    return reduce(xs, [] as X[], (acc, x) => f(x) ? [...acc, x] : acc)
  }
  expect(filter(["level", "hello", "abba", "world"], isPalindrome)).toEqual([
    "level",
    "abba",
  ]);

})
