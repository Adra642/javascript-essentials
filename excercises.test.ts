import { expect, test } from "vitest";
import { every, find, some } from "./excercises";

test("some returns true when an element matches", function() {
	expect(some([1, 2, 3], (value) => value > 2)).toBe(true);
});

test("some returns false when no element matches or the array is empty", function() {
	expect(some([1, 2, 3], (value) => value > 3)).toBe(false);
	expect(some([], (value: number) => value > 0)).toBe(false);
});

test("every returns true when all elements match", function() {
	expect(every([1, 2, 3], (value) => value > 0)).toBe(true);
});

test("every returns false when an element does not match", function() {
	expect(every([1, 2, 3], (value) => value < 3)).toBe(false);
});

test("every returns true for an empty array", function() {
	expect(every([], (value: number) => value > 0)).toBe(true);
});

test("find returns the first matching element", function() {
	expect(find([1, 2, 3, 4], (value) => value > 2)).toBe(3);
});

test("find returns null when there is no match or the array is empty", function() {
	expect(find([1, 2, 3], (value) => value > 3)).toBeNull();
	expect(find([], (value: number) => value > 0)).toBeNull();
});