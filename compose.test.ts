import { expect, test } from "vitest";
import { compose, pipe, pipe2, pipe3 } from "./compose";

test("pipes values from left to right", function () {
  expect(
    pipe(
      (x: number) => x * 2,
      (x: number) => x + 1,
    )(3),
  ).toBe(7);
});

test("composes functions from right to left", function () {
  expect(
    compose(
      (x: number) => x * 2,
      (x: string) => x.length,
    )("pepe"),
  ).toBe(8);
});

test("pipe variants produce the same result", function () {
  const length = (value: string) => value.length;
  const double = (value: number) => value * 2;

  expect(pipe(length, double)("pepe")).toBe(8);
  expect(pipe2(length, double)("pepe")).toBe(8);
  expect(pipe3(length, double)("pepe")).toBe(8);
});
